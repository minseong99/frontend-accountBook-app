const config = [
  {
    label: "name",
    makeState: (preState, event) => ({
      ...preState,
      name: event.target.value,
    }),
  },
  {
    label: "price",
    makeState: (preState, event) => ({
      ...preState,
      price: event.target.value,
    }),
  },
  {
    label: "type",
    makeState: (preState, event) => ({
      ...preState,
      type: event.target.name,
    }),
  },
  {
    label: "date",
    makeState: (preState, event) => ({
      ...preState,
      date: event.target.value,
    }),
  },
  {
    label: "memo",
    makeState: (preState, event) => ({
      ...preState,
      memo: event.target.value,
    }),
  },
  {
    label: "repurchase",
    makeState: (preState, event) => ({
      ...preState,
      repurchase: event.target.value,
    }),
  },
];

const typeList = [
  { label: "식료품", value: "foods" },
  { label: "패션의류/잡화", value: "clothes" },
  { label: "뷰티", value: "beauty" },
  { label: "유아동", value: "baby" },
  { label: "주방용품", value: "kitchen" },
  { label: "스포츠", value: "sports" },
];

const sortList = [
  {
    label: "가격 높은 순",
    value: "priceUp",
    findTarget: (itemInfo) => Number(itemInfo.price),
  },
  {
    label: "가격 낮은 순",
    value: "priceDown",
    findTarget: (itemInfo) => Number(itemInfo.price),
  },
  {
    label: "최신순",
    value: "latest",
    findTarget: (itemInfo) => new Date(itemInfo.date).getTime(),
  },
  {
    label: "오래된 순",
    value: "oldest",
    findTarget: (itemInfo) => new Date(itemInfo.date).getTime(),
  },
];

const testItemList = [
  {
    id: 1,
    name: "라면",
    price: 1000,
    type: "foods",
    date: "2024-5-03",
    memo: "",
    repurchase: "true",
  },
  {
    id: 2,
    name: "라면",
    price: 10000,
    type: "foods",
    date: "2024-5-05",
    memo: "",
    repurchase: "true",
  },
  {
    id: 3,
    name: "라면",
    price: 100000,
    type: "foods",
    date: "2024-5-02",
    memo: "",
    repurchase: "true",
  },
  {
    id: 4,
    name: "립스틱",
    price: 2000,
    type: "beauty",
    date: "2024-5-01",
    memo: "",
    repurchase: "true",
  },
  {
    id: 5,
    name: "립스틱",
    price: 20000,
    type: "beauty",
    date: "2024-4-02",
    memo: "",
    repurchase: "true",
  },
  {
    id: 6,
    name: "립스틱",
    price: 200000,
    type: "beauty",
    date: "2024-4-05",
    memo: "",
    repurchase: "true",
  },
];

export { config, typeList, sortList, testItemList };
