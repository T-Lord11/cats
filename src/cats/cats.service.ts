import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    findAll(): Cat[] {
        return this.cats;
    }

    findbyName(name: string){
        let cat=this.cats.find((value)=> value.name == name);
        console.log(cat);
        //let cat=this.cats.indexOf(name); 
        return cat;
    }

    create(cat): string {
        this.cats.push(cat)
        return 'Sucesso' ;
    }

    //update(cat): string {
        
    
}
