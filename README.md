<h1 align="center">
  <img src="./assets/logo.svg" width="200"><br/><br/>
  <samp>Lodash 类型体操库 </samp><sup><em>WIP</em></sup>
</h1>

参考 [**Lodash**]('https://lodash.com/') 功能及 API 所开发的针对于 TS 类型的体操库。采用 TDD 的开发模式进行学习实践，绝大部分功能特性及测试用例尽可能与 Lodash 保持一致，就是玩儿 😜。

**不定时更新，有兴趣欢迎 PR**

> 注意： 
> - 该工具库切莫在项目中使用，但部分功能点的实现可借鉴到项目中。
> - 有些`lodash`中的一些的工具方法，可能没办法实现，暂时保留方法，待有思绪再进行拓展。对于实在没办法实现的可以提取当前函数的目标进行变相实现。

### 已完成

**Array**
- Compact 返回一个非假值的元组
- Last 返回元组最后一个元素
- Reverse 反转元组
- Drop 切片元组，去除元组前面 N 个元素
- DropRight 切片元组，去除元组尾部 N 个元素
- Head 返回元组第一个元素
- Initial 获取除元组的最后一个元素之外的所有元素
- Tail 获取除元组的第一个元素之外的所有元素
- Join 将元组中的所有元素转换为由分隔符分隔的字符串
- Replace 替换字符串中要替换的字符串替换成要匹配替换的字符串
- Fill 填充元素到元组中

**Collection**

...

**Date**

...

**Function**

...

**Lang**
- IsAny 检查是否为 any 类型
- IsArray 检查是否为 Array 类型
- IsBoolean 检查是否是为 boolean 类型
- IsDate 检查是否为 Date 类型
- IsEqual 检查类型是否相等
- IsError 检查是否为 Error 类型
- IsFunction 检查是否为 Function 类型
- IsNull 检查是否为 null
- IsNumber 检查是否为 number 类型
- IsObject 检查是否为 Object 类型
- IsSet 检查是否为 set 类型
- IsString 检查是否为 string 类型
- IsUndefined 检查是否为 undefined
- IsWeakSet 检查是否为 weakset 类型
- IsMap 检查是否为 map 类型
- IsWeakMap 检查是否为 weakMap 类型
- IsSymbol 检查是否为 symbol 类型
- ToString 将值转换为字符串

**Math**

- Add 两数相加（1000 以内）
- Divide 两数相除
- Mean 计算数组的平均值
- Multiply 两数相乘
- Subtract 两数相减（1000 以内）
- Sum 计算数组中值的总和

**Number**

...

**Object**

...

**Seq**

...

**String**
- Capitalize 字符串首字母大写，其余小写
- EndsWith 判断字符串是否以指定字符结尾
- Split 按分隔符拆分字符串
- StartsWith 判断字符串是否以指定字符开头
- ToLower 转换整个字符串的字符为小写
- ToUpper 转换整个字符串的字符为大写
- Trim 移除前面和后面的空格或者指定字符
- TrimEnd 移除后面的空格或者指定字符
- TrimStart 移除前面的空格或者指定字符
- LowerFirst 将字符串的第一个字符转换为小写
- UpperFirst 将字符串的第一个字符转换为大写
- Repeat 重复给定的字符串 n 次
- Escape 将字符串中的 "&", "<", ">", '"' 和 "'" 字符转成HTML实体字符
- PadStart 在字符串左侧填充字符
- PadEnd 在字符串右侧填充字符
- Pad 在字符串左右侧填充字符
- Unescape 将字符串中的 &amp;, &lt;, &gt;, &quot;,和 &#39; HTML实体字符转成字符
- CamelCase 将字符串转换为驼峰式大小写
- UpperCase 将字符串（作为空格分隔的单词）转换为大写
- LowerCase 将字符串（作为空格分隔的单词）转换为小写
- StartCase 将字符串转换为起始大小写
- KebabCase 将字符串转换为 kebab 大小写
- SnakeCase 将字符串转换为蛇形大小写
- EscapeRegExp 转义正则表达式特殊字符"^"、"$"、""、"."、"*"、"+"、"?"、"("、")"、"["、"]"、"{"、"}"、"|" 和 "\\" 在字符串中
- ParseInt 将字符串转成整数
- Words 将字符串拆分为其单词的元组

**Util**

...


<details>
<summary>进行中</summary><br>

**Array**
- Chunk
- Concat
- Difference
- DifferenceBy
- DifferenceWith
- DropRightWhile
- DropWhile
- FindIndex
- FindLastIndex
- Flatten
- FlattenDeep
- FlattenDepth
- FromPairs
- IndexOf
- Intersection
- IntersectionBy
- IntersectionWith
- LastIndexOf
- Nth
- Pull
- PullAll
- PullAllBy
- PullAllWith
- PullAt
- Remove
- Slice
- SortedIndex
- SortedIndexBy
- SortedIndexOf
- SortedLastIndex
- SortedLastIndexBy
- SortedLastIndexOf
- SortedUniq
- SortedUniqBy
- Take
- TakeRight
- TakeRightWhile
- TakeWhile
- Union
- UnionBy
- UnionWith
- Uniq
- UniqBy
- UniqWith
- Unzip
- UnzipWith
- Without
- Xor
- XorBy
- XorWith
- Zip
- ZipObject
- ZipObjectDeep
- ZipWith

**Collection**
- CountBy
- ForEach
- ForEachRight
- Every
- Filter
- Find
- FindLast
- FlatMap
- FlatMapDeep
- FlatMapDepth
- GroupBy
- Includes
- InvokeMap
- KeyBy
- Map
- OrderBy
- Partition
- Reduce
- ReduceRight
- Reject
- Sample
- SampleSize
- Shuffle
- Size
- Some
- SortBy

**Date**
- Now

**Function**
- After
- Ary
- Before
- Bind
- BindKey
- Curry
- CurryRight
- Debounce
- Defer
- Delay
- Flip
- Memoize
- Negate
- Once
- OverArgs
- Partial
- PartialRight
- Rearg
- Rest
- Spread
- Throttle
- Unary
- Wrap

**Lang**
- CastArray
- Clone
- CloneDeep
- CloneDeepWith
- CloneWith
- ConformsTo
- Eeq
- Gt
- Gte
- IsArguments
- IsArrayBuffer
- IsArrayLike
- IsArrayLikeObject
- IsBuffer
- IsElement
- IsEmpty
- IsEqualWith
- IsFinite
- IsInteger
- IsLength
- IsMatch
- IsMatchWith
- IsNaN
- IsNative
- IsNil
- IsObjectLike
- IsPlainObject
- IsRegExp
- IsSafeInteger
- IsTypedArray
- Lt
- Lte
- ToArray
- ToFinite
- ToInteger
- ToLength
- ToNumber
- ToPlainObject
- ToSafeInteger

**Math**
- Ceil
- Floor
- Max
- MaxBy
- MeanBy
- Min
- MinBy
- Round
- SumBy

**Number**
- Clamp
- InRange
- Random

**Object**
- Assign
- AssignIn
- AssignInWith
- AssignWith
- At
- Create
- Defaults
- DefaultsDeep
- ToPairs
- ToPairsIn
- AssignIn
- AssignInWith
- FindKey
- FindLastKey
- ForIn
- ForInRight
- ForOwn
- ForOwnRight
- Functions
- FunctionsIn
- Get
- Has
- HasIn
- Invert
- InvertBy
- Invoke
- Keys
- KeysIn
- MapKeys
- MapValues
- Merge
- MergeWith
- Omit
- OmitBy
- Pick
- PickBy
- Result
- Set
- SetWith
- ToPairs
- ToPairsIn
- Transform
- Unset
- Update
- UpdateWith
- Values
- ValuesIn

**Seq**
- Chain
- Tap
- Thru

**String**
- Deburr
- Template
- Truncate

**Util**
- Attempt
- BindAll
- Cond
- Conforms
- Constant
- DefaultTo
- Flow
- FlowRight
- Identity
- Iteratee
- Matches
- MatchesProperty
- Method
- MethodOf
- Mixin
- NoConflict
- Noop
- NthArg
- Over
- OverEvery
- OverSome
- Property
- PropertyOf
- Range
- RangeRight
- RunInContext
- StubArray
- StubFalse
- StubObject
- StubString
- StubTrue
- Times
- ToPath
- UniqueId

</details>
