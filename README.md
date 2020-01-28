# [CRUD](https://stackblitz.com/github/SaurabhTiwari95/CRUD)

## Forms in Angular

```
    There are two types of forms
        - Reactive
        - Template Driven
```

#### Reactive Forms

    these are more robust: they are more scalable,reusable and testable

#### Template Driven Forms

    These are useful for adding a simple from to an app such as email signup form.

#### [Key Differences](https://angular.io/guide/forms-overview#key-differences)

#### [Common Foundation](https://angular.io/guide/forms-overview#common-foundation)

```
    Both reactive and template-driven forms share underlying building blocks.

    FormControl tracks the value and validation status of an individual form control.

    FormGroup tracks the same values and status for a collection of form controls.

    FormArray tracks the same values and status for an array of form controls.

    ControlValueAccessor creates a bridge between Angular FormControl instances and native DOM elements.

```

#### How to add reactive forms

Step 1: Registering the reactive forms module
```
import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
    imports: [
        // other imports ...
        ReactiveFormsModule
    ],
    })
    export class AppModule { }

````
Step 2: Generating and importing a new form control
    ng generate component NameEditor
    ```
            import { Component } from '@angular/core';
            import { FormControl } from '@angular/forms';

            @Component({
            selector: 'app-name-editor',
            templateUrl: './name-editor.component.html',
            styleUrls: ['./name-editor.component.css']
        })
        export class NameEditorComponent {
        name = new FormControl('');
        }
    ```
Step 3: Registering the control in the template
    Now Display the content using the selector          [<app-test-name></app-test-name>]
