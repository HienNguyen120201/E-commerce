const initState = {
    search: "",
    category: "",
    price: [],
    features: [],
    screen: [],
    filteredTag: [],
    filteredProducts:[]
};

export const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case "SUBMIT_FILTER":
            return {
                //* copy lại state ban đầu
                ...state,
                //* thay đổi những trường dữ liệu của action gửi lên so với state ban đầu
                search: action.payload.search,
                category: action.payload.category,
                price: action.payload.price,
                screen: action.payload.screen,
                filteredTag: [...action.payload.price, ...action.payload.features, ...action.payload.screen],
            };
        default:
            return state;
    }
};
