import _ from "lodash";
import fs from "fs";
import less from "less/lib/less-node";
import path from "path";

export default function getLessVars (from) {
    const dirname = path.dirname(from);
    const src = fs.readFileSync(from);
    return less.parse(src.toString(), {
        paths: [dirname],
        javascriptEnabled: true,
    })
        .then(parsed =>
            less.render(`
@import "${from}";
${Object.keys(parsed.variables()).map(v => `.${v.slice(1)} { value: ${v}; }`).join("\n")}`, {
                paths: [dirname],
                javascriptEnabled: true,
                compress: true, // compress to get rid of comments
            }),
        )
        .then(({ css }) =>
            css.split("}").map((line) => {
                const parts = line.match(/^\.([\w-]+)\s*\{\s*value:\s*([^;]+);?$/);
                if (!parts) {
                    return undefined;
                }
                return [parts[1], parts[2]];
            }),
        )
        .then(pairs => pairs.filter(p => !_.isNil(p)))
        .then(pairs => _.sortBy(pairs, "0"))
        .then(_.fromPairs);
}
