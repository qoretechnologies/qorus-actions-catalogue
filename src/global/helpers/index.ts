import {
    IPrepareAllQore,
    IQoreAppActionOption,
    IQoreAppActionWithFunction,
} from "global/models/qore";

export const getConvertedAcionsForQorus = (actions: IPrepareAllQore): any => {
    const allActions = actions.actions || {};
    return Object.keys(allActions).reduce((acc: Record<string, IQoreAppActionWithFunction[]>, item: string) => {
        acc[item] = [];
        Object.keys(allActions[item]).map(it => {
            // variables to use in prepare object
            const splittedItem = it.replace(/([a-z])([A-Z])/g, '$1 $2').split(' '),
                upperItem = item.charAt(0).toUpperCase() + item.slice(1),
                upperFirstItem = splittedItem[0].charAt(0).toUpperCase() + splittedItem[0].slice(1),
                lowerSecondItem = splittedItem[1].toLowerCase(),
                lowerThirdItem = splittedItem[2]?.toLowerCase() || '',
                fnItem = allActions[item][it],
                fn = (obj: Record<string, IQoreAppActionOption>) => fnItem.app_function(obj)

            const prepareObj: any = (obj: Record<string, IQoreAppActionOption>) => {
                return {
                    display_name: `${upperFirstItem} a ${lowerSecondItem}${lowerThirdItem ? ` ${lowerThirdItem}` : ''}`,
                    short_desc: `${upperFirstItem} a ${lowerSecondItem}${lowerThirdItem ? ` ${lowerThirdItem}` : ''} in ${upperItem}`,
                    desc: `This action ${splittedItem[0]}s a ${lowerSecondItem}${lowerThirdItem ? ` ${lowerThirdItem}` : ''} in ${upperItem}`,
                    app: item,
                    action: `${splittedItem[0]}_${lowerSecondItem}${lowerThirdItem ? `_${lowerThirdItem}` : ''}`,
                    action_code: 2,
                    app_function: () => fn(obj),
                    options: obj,
                    response_type: fnItem.response_type
                }
            }
       
            return acc[item].push(prepareObj);
        })
        return acc;
    }, {}) as any
}