import { getValueText } from "functions/Utils"

const ListAuthorMapping = (list) => {
    let data = [];
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        data.push({
            label: getValueText(item.author_name),
            value: getValueText(item.author_id),
        })
    }
    return data
}

export default ListAuthorMapping
