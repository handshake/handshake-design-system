The `_components` folder contains straight reexports of antd/antd-mobile/antd-mobile-rn components
without any alteration.

The components in here are NOT intended to be used AS-IS; each component is a starting point for
creating a wrapper component (in the neighboring `components` folder) that has the same name, props,
and in general, the same/consistent behavior and appearance on both web & mobile.

Below, I have documented approximately equivalent components between both web & mobile versions of
antd.

# Component Equivalencies

NOTE: in some cases, a component may be equivalent to multiple other components
Of particular note, the mobile `Picker` component is equivalent (based on the props)
to the web `Select` and `Cascader` components, which are not shown adjacent since
we sort on that column.

NOTE: some of the equivalencies are a bit of a stretch
(e.g. `Upload` only has a tiny bit in common with `ImagePicker`)

| antd               | antd-mobile           | antd-mobile-rn    | combined (ours) | notes |
|--------------------|-----------------------|-------------------|-----------------|--------
| -                  | Flex                  | Flex              | -               | -     |
| -                  | ListView              | -                 | -               | Infinite scroll List |
| -                  | NavBar                | -                 | -               | -     |
| -                  | PullToRefresh         | -                 | -               | -     |
| -                  | Result                | Result            | -               | -     |
| -                  | SegmentedControl      | SegmentedControl  | -               | -     |
| -                  | SwipeAction           | SwipeAction       | -               | -     |
| -                  | Text                  | Text              | -               | -     |
| -                  | Toast                 | Toast             | -               | -     |
| -                  | View                  | View              | -               | -     |
| -                  | WhiteSpace            | WhiteSpace        | -               | -     |
| -                  | WingBlank             | WingBlank         | -               | -     |
| Affix              | TabBar ?              | TabBar ?          | -               | -     |
| Alert              | NoticeBar             | NoticeBar         | -               | -     |
| Anchor             | -                     | -                 | -               | -     |
| AutoComplete       | ?                     | ?                 | -               | -     |
| Avatar             | ?                     | ?                 | -               | -     |
| BackTop            | -                     | -                 | -               | -     |
| Badge              | Badge                 | Badge             | -               | -     |
| Breadcrumb         | -                     | -                 | -               | -     |
| Button             | Button                | Button            | Button          | -     |
| Button.Group       | SegmentedControl      | SegmentedControl  | -               | -     |
| Calendar           | Calendar              | ?                 | -               | -     |
| Card               | Card                  | Card              | -               | -     |
| Carousel           | Carousel              | Carousel          | -               | -     |
| Cascader           | Picker                | Picker            | -               | -     |
| Checkbox           | Checkbox              | Checkbox          | -               | -     |
| Collapse           | Accordion             | -                 | -               | -     |
| Collapse.Accordion | Accordion (accordion) | Accordion         | -               | -     |
| DatePicker         | DatePicker            | DatePicker        | -               | -     |
| DatePicker         | DatePickerView        | DatePickerView    | -               | -     |
| Divider            | -                     | -                 | -               | -     |
| Drawer             | Drawer                | Drawer            | -               | -     |
| Dropdown           | ActionSheet           | ActionSheet       | -               | -     |
| Form               | ?                     | ?                 | -               | -     |
| Grid               | Grid                  | Grid              | -               | -     |
| Icon               | Icon                  | Icon              | -               | -     |
| Input              | InputItem             | InputItem         | -               | -     |
| Input              | TextareaItem          | TextareaItem      | -               | -     |
| Input.Search       | SearchBar             | SearchBar         | -               | -     |
| InputNumber        | InputItem             | InputItem         | -               | -     |
| InputNumber        | Stepper               | Stepper           | -               | -     |
| Layout             | -                     | -                 | -               | -     |
| LocaleProvider     | LocaleProvider        | LocaleProvider    | LocaleProvider  | -     |
| List               | List                  | List              | -               | -     |
| Mention            | -                     | -                 | -               | -     |
| Menu               | Menu                  | -                 | -               | -     |
| Message            | Toast                 | Toast             | -               | -     |
| Modal              | Modal                 | Modal             | -               | -     |
| Notification       | Toast ?               | Toast ?           | -               | -     |
| Pagination         | Pagination            | Pagination        | -               | -     |
| PopConfirm         | Modal (popup)         | Modal (popup)     | -               | -     |
| Popover            | Popover               | Popover           | -               | -     |
| Progress           | Progress              | Progress          | -               | -     |
| Radio              | Radio                 | Radio             | -               | -     |
| Rate               | -                     | -                 | -               | -     |
| Select             | Picker                | Picker            | -               | -     |
| Skeleton           | -                     | -                 | -               | -     |
| Slider             | Slider                | Slider            | -               | -     |
| Slider             | Range                 | -                 | -               | -     |
| Spin               | ActivityIndicator     | ActivityIndicator | Spinner         | -     |
| Steps              | Steps                 | Steps             | -               | -     |
| Switch             | Switch                | Switch            | -               | -     |
| Table              | ?                     | ?                 | -               | -     |
| Tabs               | Tabs                  | Tabs              | -               | -     |
| Tag                | Tag                   | Tag               | -               | -     |
| TimePicker         | DatePicker            | DatePicker        | -               | -     |
| Timeline           | Steps                 | Steps             | -               | -     |
| Tooltip            | -                     | -                 | -               | -     |
| Transfer           | ?                     | ?                 | -               | -     |
| Tree               | ?                     | ?                 | -               | -     |
| TreeSelect         | ?                     | ?                 | -               | -     |
| Upload             | ImagePicker           | ImagePicker       | -               | -     |
