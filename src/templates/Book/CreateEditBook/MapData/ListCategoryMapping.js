import { getValueText } from "functions/Utils"

const ListCategoryMapping = (list) => {
    let data = [];
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        data.push({
            label: getValueText(item.category_name),
            value: getValueText(item.category_id),
        })
    }
    return data
}

export default ListCategoryMapping
