import svgParser from "@target-corp/react-native-svg-parser";

export default function (svg, size) {
    return svgParser(svg, "", { height: size, width: size });
}
