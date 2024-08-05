import { IPrepareAllQore, IQoreAppActionWithFunction } from "global/models/qore";

export const getConvertedAcionsForQorus = (actions: IPrepareAllQore) => {
    const allActions = actions.actions || {};
    return Object.keys(allActions).reduce((acc, item) => {
        acc[item] = [];
        Object.keys(allActions[item]).map(it => {
            // variables to use in prepare object
            const splittedItem = it.replace(/([a-z])([A-Z])/g, '$1 $2').split(' '),
                upperItem = item.charAt(0).toUpperCase() + item.slice(1),
                upperFirstItem = splittedItem[0].charAt(0).toUpperCase() + splittedItem[0].slice(1),
                lowerSecondItem = splittedItem[1].toLowerCase(),
                lowerThirdItem = splittedItem[2]?.toLowerCase() || '',
                fn = allActions[item][it];

            const prepareObj: IQoreAppActionWithFunction = {
                display_name: `${upperFirstItem} a ${lowerSecondItem}${lowerThirdItem ? ` ${lowerThirdItem}` : ''}`,
                name: `${splittedItem[0]}_${lowerSecondItem}${lowerThirdItem ? `_${lowerThirdItem}` : ''}`,
                short_desc: `${upperFirstItem} a ${lowerSecondItem}${lowerThirdItem ? ` ${lowerThirdItem}` : ''} in ${upperItem}`,
                desc: `This action ${splittedItem[0]}s a ${lowerSecondItem}${lowerThirdItem ? ` ${lowerThirdItem}` : ''} in ${upperItem}`,
                app: item,
                action: `${splittedItem[0]}_${lowerSecondItem}${lowerThirdItem ? `_${lowerThirdItem}` : ''}`,
                action_code: 2,
                app_function: (obj) => fn(obj)
            }
            return acc[item].push(prepareObj);
        })
        return acc;
    }, {})
}