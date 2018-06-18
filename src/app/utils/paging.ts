export class Paging {
    getPager({pageIndex, pageSize, length}) {
        let startIndex = pageIndex * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, length - 1);

        return {
            startIndex: startIndex,
            endIndex: endIndex
        };
    }
}