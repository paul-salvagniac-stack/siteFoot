export class Produit{
    id: number;
    type: string;
    nom: string;
    description: string;
    prix: number;
    stock: number;
    img: string;

    constructor(id:number, type:string, nom:string, descritpion:string, prix:number, stock:number, img:string){
        this.id = id;
        this.type = type;
        this.nom = nom;
        this.description = descritpion;
        this.prix = prix;
        this.stock = stock;
        this.img = img;
    }

    public getId(): number{
        return this.id;
    }

    public setId(id:number):number{
        return this.id = id;
    }

    public getType(): string{
        return this.type;
    }

    public setType(type:string):string{
        return this.type = type;
    }

    public getNom(): string{
        return this.nom;
    }

    public setNom(nom:string):string{
        return this.nom = nom;
    }

    public getDescription(): string{
        return this.description;
    }

    public setDescription(description:string):string{
        return this.description = description;
    }

    public getPrix(): number{
        return this.prix;
    }

    public setPrix(prix:number):number{
        return this.prix = prix;
    }

    public getStock(): number{
        return this.stock;
    }

    public setStock(stock:number):number{
        return this.stock = stock;
    }

    public getImg(): string{
        return this.img;
    }

    public setImg(img:string):string{
        return this.img = img;
    }

}