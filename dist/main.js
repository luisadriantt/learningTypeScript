var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// data types can be specificated with semicolumn and the type name
var a = "1";
// functions can have an specific type of return
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName(a, "f"));
var user = {
    name: "hola",
    age: 11,
    getMessage: function () {
        return "Hello " + name;
    }
};
var user1 = {
    name: "jelow",
    getMessage: function () {
        return "Hello " + name;
    }
};
console.log(user1.getMessage());
// Union operator: combine data types
// if its not initialized will be undefined
var pageNumber = "1"; // can be string or number
var user2 = null;
var id = "0123r";
var hotTopics = ["typescript", "Python"];
var newTopic = null;
var oldTopics = "typescript";
// Void functions: dont return anything
var doSomething = function () {
    console.log("do something");
};
// 'Any' turn off typescript checks return any type of object
// ** do not use **
var foo = "foo";
foo = 23;
// Never type: can't be excecuted to the end // never ends
var doOther = function () {
    while (true) {
        console.log("never");
    }
};
// Unknown: like any but better, don't disable typescript
var vUnknown = 10;
// Type assertion: cast data types
var s1 = vUnknown;
var vString = "1";
var toNumbre = vString;
// DOM interaction
// use type assertion
var somElement = document.querySelector(".foo");
console.log("some element ", somElement.value);
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangable = firstName;
    }
    User.prototype.changeUnchange = function () {
        //this.unchangable = "nuevo" <- can't change readonly
    };
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    User.MAX_AGE = 50; // only can be used from class not instances
    return User;
}());
// Inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var newUser = new User("uno", "dos");
console.log(newUser.getFullname);
var admin = new Admin("new", "admin");
admin.setEditor("new editor");
console.log(admin, " editor ", admin.getEditor);
// Generics: allow to provide different data types
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var nUser = {
    name: "User",
    data: {
        meta: "gola"
    },
    meta: "other type"
};
var nUser2 = {
    name: "User",
    data: [1, 2, 3],
    meta: ["1", "2", "3"]
};
// should use NuserInterface object since the function has the generic type object
var result = addId(nUser);
console.log("result ", result);
// Enum: create enumerables increments from 0
// as a value
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
    StatusEnum[StatusEnum["Extra"] = 3] = "Extra";
})(StatusEnum || (StatusEnum = {}));
// assign values
var NewStatusEnum;
(function (NewStatusEnum) {
    NewStatusEnum["NotStarted"] = "notStarted";
    NewStatusEnum["InProgress"] = "inProgress";
    NewStatusEnum["Done"] = "done";
    NewStatusEnum["Extra"] = "extra";
})(NewStatusEnum || (NewStatusEnum = {}));
// as data type
var myStatus = null;
myStatus = StatusEnum.Done;
console.log(StatusEnum.Done); // prints 2
