
export interface Category{
      id : number
      name : string
      url : string
      urlItems: string
      category : string
      subitems: [{
        name: string
        urlItems: string
        category: string
      }];
      
  }

export interface Products{
      id:string
      title: string
      price: number
      description: string
      images:string[]
      urlItems: string
      category:{
        id:number
        url:string
        subitems:Array<{
          name:string
          urlItems: string
          category:string
        }>
      }
      creationAt:string
    }