/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        this.value = value * 1; 
    }

    let a = document.querySelector("#a"),
    b = document.querySelector("#b"),
    button = document.querySelector("button"),
    fnSelect = document.querySelector("#functions")
    output = document.querySelector("#output"),
    functions = [
        add,
        multiply,
        subtract,
        divide,
    ];

    fillOptions(functions, fnSelect);

    add(a, b) {
        return arguments[0] + arguments[1];
    }

    subtract(a, b) {
        return arguments[0] - arguments[1];
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if(b*1 === 0) {
            return "durch Null geteilt!"
        }
        return a / b;
    }

    button.addEventListener("click", function() {
        let fnId = fnSelect.selectedOptions[0].value,
            f = functions[fnId];
        output.value = f(a.value, b.value);
    });

    function fillOptions(list, select) {
        list.forEach(function(item, i) {
            let option = document.createElement("option");
            option.value = i;
            option.innerText = item?.name;
            select.appendChild(option);
        });
    }

    pow(value) {

    }

    faculty() {

    }
}
