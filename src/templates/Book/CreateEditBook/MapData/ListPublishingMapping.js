import { getValueText } from "functions/Utils"

const ListPublishingMapping = (list) => {
    let data = [];
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        data.push({
            label: getValueText(item.publishing_company_name),
            value: getValueText(item.publishing_company_id),
        })
    }
    return data
}

export default ListPublishingMapping
