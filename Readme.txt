Create ng new <name>
ng add @angular/material.

    Changes took place in project:
    angular.json-- styles[angular  material]
    package.json-- @angular/cdk and angular/material--dependencies added.
    package-lock.json.
    index.html-- 2 references added.
    main.ts.
    styles.css.
    app.module.ts-- In imports array BrowserModule and BrowserAnimationModule added.


app-module.ts:
        import {MatButtonModule} from '@angular/material/button';

        imports[MatButtonModule]

        app.component.html:  <button mat></button>

        import it--add it in imports array--use it in html.

Install a new module:
//Only concerned with importing and exporting material components.


    ng g m Material.
        //Remove from app.module.ts
        import {MatButtonModule} from '@angular/material/button'; 
        imports[MatButtonModule]
        //erase commonModule, add export array.
        //remove declaration.

    const MaterialComponents =[
        MatButtonModule

        ]

        //Only concerned with importing and exporting material components.
        @NgModule({

        imports: [
            MaterialComponents
            
        ],
        exports: [
            MaterialComponents
        ]
        })
        export class MaterialModule { }

    app.module.ts: 

    import [MaterialModule]