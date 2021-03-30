// data types can be specificated with semicolumn and the type name
const a: string = "1";
// functions can have an specific type of return
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname
}
console.log(getFullName(a, "f"))

// interfaces: specify types for objects
// by defaul oll porperties are required
interface UserInterface {
    name: string;
    age?: number; // optional propertie
    getMessage(): string; // function in interface
}

const user: UserInterface = { // type will be interface instead of object
    name: "hola",
    age: 11,
    getMessage(){
        return "Hello " + name
    }
}
const user1: UserInterface = {
    name: "jelow",
    getMessage(){
        return "Hello " + name
    }
}
console.log(user1.getMessage())

// Union operator: combine data types
// if its not initialized will be undefined
let pageNumber: string | number = "1"; // can be string or number
let user2: UserInterface | null = null;

// type alias: create new data types
type ID = string;
type HotTopic = string;
type MaybeHotTopic = HotTopic | null; // type alias + union

let id: ID = "0123r";
const hotTopics: HotTopic[] = ["typescript", "Python"]
const newTopic: MaybeHotTopic = null;
const oldTopics: MaybeHotTopic = "typescript";

// Void functions: dont return anything
const doSomething = (): void => {
    console.log("do something")
}

// 'Any' turn off typescript checks return any type of object
// ** do not use **
let foo: any = "foo";
foo = 23;

// Never type: can't be excecuted to the end // never ends
const doOther = (): never => {
    while (true) {
        console.log("never")
    }
}

// Unknown: like any but better, don't disable typescript
let vUnknown: unknown = 10;
// Type assertion: cast data types
let s1: string = vUnknown as string;
let vString: string = "1";
let toNumbre: number = (vString as unknown) as number;

// DOM interaction
// use type assertion
const somElement = document.querySelector(".foo") as HTMLInputElement;
console.log("some element ", somElement.value)


// Classes
interface NewUserInterface {
    getFullname(): string;
}
class User implements NewUserInterface { // forces to use interface objects
    private firstName: string;
    private lastName: string;
    readonly unchangable: string;
    static readonly MAX_AGE = 50; // only can be used from class not instances

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangable = firstName;
    }

    changeUnchange(): void {
        //this.unchangable = "nuevo" <- can't change readonly
    }

    getFullname(): string {
        return this.firstName + " " + this.lastName
    }
}

// Inheritance
class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const newUser = new User("uno", "dos")
console.log(newUser.getFullname)

const admin = new Admin("new", "admin");
admin.setEditor("new editor")
console.log(admin, " editor ", admin.getEditor)

// Generics: allow to provide different data types
const addId = <T extends object>(obj: T) => { // set the default generic type object
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

 // generic interfaces: allows to create just one interface
 // and use it in several objects, functions
interface NuserInterface<T, V> { // can use differents data types (T, V)
    name: string
    data: T
    meta: V
}

const nUser: NuserInterface<{meta: string}, string> = {
    name: "User",
    data: {
        meta: "gola"
    },
    meta: "other type"
}

const nUser2: NuserInterface<number[], string[]> = {
    name: "User",
    data: [1, 2, 3],
    meta: ["1", "2", "3"]
}

// should use NuserInterface object since the function has the generic type object
const result = addId<NuserInterface <{meta: string}, string>>(nUser)
console.log("result ", result)

// Enum: create enumerables increments from 0
// as a value
enum StatusEnum {
    NotStarted, //3
    InProgress, //1
    Done, //2
    Extra, //3
}
// assign values
enum NewStatusEnum {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done",
    Extra = "extra",
}
// in interfaces
interface Task {
    id: string;
    status: StatusEnum;
}
// as data type
let myStatus: StatusEnum | null = null;
myStatus = StatusEnum.Done;

console.log(StatusEnum.Done) // prints 2