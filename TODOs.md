# TODOs

> 以下为待办事项，所有方法参考于`lodash`。使用`typescript`完成`lodash`的方法，实现一个`type-lodash`类型工具库。

注：有些`lodash`中的一些的工具方法，可能没办法实现，暂时保留方法，待有思绪再进行拓展。对于实在没办法实现的可以提取当前函数的目标进行变相实现。

[toc]

## Array

- [ ] Chunk
- [ ] Compact
- [ ] Concat
- [ ] Difference
- [ ] DifferenceBy
- [ ] DifferenceWith
- [ ] Drop
- [ ] DropRight
- [ ] DropRightWhile
- [ ] DropWhile
- [ ] Fill
- [ ] FindIndex
- [ ] FindLastIndex
- [ ] Head
- [ ] Flatten
- [ ] FlattenDeep
- [ ] FlattenDepth
- [ ] FromPairs
- [ ] IndexOf
- [ ] Initial
- [ ] Intersection
- [ ] IntersectionBy
- [ ] IntersectionWith
- [ ] Join
- [ ] Last
- [ ] LastIndexOf
- [ ] Nth
- [ ] Pull
- [ ] PullAll
- [ ] PullAllBy
- [ ] PullAllWith
- [ ] PullAt
- [ ] Remove
- [ ] Reverse
- [ ] Slice
- [ ] SortedIndex
- [ ] SortedIndexBy
- [ ] SortedIndexOf
- [ ] SortedLastIndex
- [ ] SortedLastIndexBy
- [ ] SortedLastIndexOf
- [ ] SortedUniq
- [ ] SortedUniqBy
- [ ] Tail
- [ ] Take
- [ ] TakeRight
- [ ] TakeRightWhile
- [ ] TakeWhile
- [ ] Union
- [ ] UnionBy
- [ ] UnionWith
- [ ] Uniq
- [ ] UniqBy
- [ ] UniqWith
- [ ] Unzip
- [ ] UnzipWith
- [ ] Without
- [ ] Xor
- [ ] XorBy
- [ ] XorWith
- [ ] Zip
- [ ] ZipObject
- [ ] ZipObjectDeep
- [ ] ZipWith

## Collection

- [ ] CountBy
- [ ] ForEach
- [ ] ForEachRight
- [ ] Every
- [ ] Filter
- [ ] Find
- [ ] FindLast
- [ ] FlatMap
- [ ] FlatMapDeep
- [ ] FlatMapDepth
- [ ] GroupBy
- [ ] Includes
- [ ] InvokeMap
- [ ] KeyBy
- [ ] Map
- [ ] OrderBy
- [ ] Partition
- [ ] Reduce
- [ ] ReduceRight
- [ ] Reject
- [ ] Sample
- [ ] SampleSize
- [ ] Shuffle
- [ ] Size
- [ ] Some
- [ ] SortBy

## Date

- [ ] Now

## Function

- [ ] After
- [ ] Ary
- [ ] Before
- [ ] Bind
- [ ] BindKey
- [ ] Curry
- [ ] CurryRight
- [ ] Debounce
- [ ] Defer
- [ ] Delay
- [ ] Flip
- [ ] Memoize
- [ ] Negate
- [ ] Once
- [ ] OverArgs
- [ ] Partial
- [ ] PartialRight
- [ ] Rearg
- [ ] Rest
- [ ] Spread
- [ ] Throttle
- [ ] Unary
- [ ] Wrap

## Lang

- [ ] CastArray
- [ ] Clone
- [ ] CloneDeep
- [ ] CloneDeepWith
- [ ] CloneWith
- [ ] ConformsTo
- [ ] Eeq
- [ ] Gt
- [ ] Gte
- [ ] IsArguments
- [x] **IsAny** 检查是否为 any 类型
- [x] **IsArray** 检查是否为 Array 类型
- [ ] IsArrayBuffer
- [ ] IsArrayLike
- [ ] IsArrayLikeObject
- [x] **IsBoolean** 检查是否是为 boolean 类型
- [ ] IsBuffer
- [x] **IsDate** 检查是否为Date类型
- [ ] IsElement
- [ ] IsEmpty
- [x] **IsEqual** 检查类型是否相等
- [ ] IsEqualWith
- [x] **IsError** 检查是否为Error类型
- [ ] IsFinite
- [x] **IsFunction** 检查是否为Function类型
- [ ] IsInteger
- [ ] IsLength
- [ ] IsMap
- [ ] IsMatch
- [ ] IsMatchWith
- [ ] IsNaN
- [ ] IsNative
- [ ] IsNil
- [x] **IsNull** 检查是否为 null 
- [x] **IsNumber** 检查是否为number类型
- [x] **IsObject** 检查是否为Object类型
- [ ] IsObjectLike
- [ ] IsPlainObject
- [ ] IsRegExp
- [ ] IsSafeInteger
- [x] **IsSet** 检查是否为set类型
- [x] **IsString** 检查是否为string类型
- [ ] IsSymbol
- [ ] IsTypedArray
- [x] **IsUndefined** 检查是否为undefined
- [ ] IsWeakMap
- [x] **IsWeakSet** 检查是否为weakset类型
- [ ] Lt
- [ ] Lte
- [ ] ToArray
- [ ] ToFinite
- [ ] ToInteger
- [ ] ToLength
- [ ] ToNumber
- [ ] ToPlainObject
- [ ] ToSafeInteger
- [ ] ToString

## Math

- [ ] Add
- [ ] Ceil
- [ ] Divide
- [ ] Floor
- [ ] Max
- [ ] MaxBy
- [ ] Mean
- [ ] MeanBy
- [ ] Min
- [ ] MinBy
- [ ] Multiply
- [ ] Round
- [ ] Subtract
- [ ] Sum
- [ ] SumBy

## Number

- [ ] Clamp
- [ ] InRange
- [ ] Random

## Object

- [ ] Assign
- [ ] AssignIn
- [ ] AssignInWith
- [ ] AssignWith
- [ ] At
- [ ] Create
- [ ] Defaults
- [ ] DefaultsDeep
- [ ] ToPairs
- [ ] ToPairsIn
- [ ] AssignIn
- [ ] AssignInWith
- [ ] FindKey
- [ ] FindLastKey
- [ ] ForIn
- [ ] ForInRight
- [ ] ForOwn
- [ ] ForOwnRight
- [ ] Functions
- [ ] FunctionsIn
- [ ] Get
- [ ] Has
- [ ] HasIn
- [ ] Invert
- [ ] InvertBy
- [ ] Invoke
- [ ] Keys
- [ ] KeysIn
- [ ] MapKeys
- [ ] MapValues
- [ ] Merge
- [ ] MergeWith
- [ ] Omit
- [ ] OmitBy
- [ ] Pick
- [ ] PickBy
- [ ] Result
- [ ] Set
- [ ] SetWith
- [ ] ToPairs
- [ ] ToPairsIn
- [ ] Transform
- [ ] Unset
- [ ] Update
- [ ] UpdateWith
- [ ] Values
- [ ] ValuesIn

## Seq

- [ ] Chain
- [ ] Tap
- [ ] Thru

## String

- [ ] CamelCase
- [ ] Capitalize
- [ ] Deburr
- [ ] EndsWith
- [ ] Escape
- [ ] EscapeRegExp
- [ ] KebabCase
- [ ] LowerCase
- [ ] LowerFirst
- [ ] Pad
- [ ] PadEnd
- [ ] PadStart
- [ ] ParseInt
- [ ] Repeat
- [ ] Replace
- [ ] SnakeCase
- [ ] Split
- [ ] StartCase
- [ ] StartsWith
- [ ] Template
- [ ] ToLower
- [ ] ToUpper
- [ ] Trim
- [ ] TrimEnd
- [ ] TrimStart
- [ ] Truncate
- [ ] Unescape
- [ ] UpperCase
- [ ] UpperFirst
- [ ] Words

## Util

- [ ] Attempt
- [ ] BindAll
- [ ] Cond
- [ ] Conforms
- [ ] Constant
- [ ] DefaultTo
- [ ] Flow
- [ ] FlowRight
- [ ] Identity
- [ ] Iteratee
- [ ] Matches
- [ ] MatchesProperty
- [ ] Method
- [ ] MethodOf
- [ ] Mixin
- [ ] NoConflict
- [ ] Noop
- [ ] NthArg
- [ ] Over
- [ ] OverEvery
- [ ] OverSome
- [ ] Property
- [ ] PropertyOf
- [ ] Range
- [ ] RangeRight
- [ ] RunInContext
- [ ] StubArray
- [ ] StubFalse
- [ ] StubObject
- [ ] StubString
- [ ] StubTrue
- [ ] Times
- [ ] ToPath
- [ ] UniqueId
