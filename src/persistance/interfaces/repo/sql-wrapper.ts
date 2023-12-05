export interface ISqlWrapper {
    query(queryString: string, queryConfig?: any[]): Promise<{ rows: any[] }>


}