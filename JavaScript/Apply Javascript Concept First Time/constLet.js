/*

There are three ways to define a variable in Javascript:-

let ----> Declares a variable that is limited to the block (the specific { } braces) where it is defined.
          The safe way.Redeclaration, Reassignment are not allowed. Can't use the let variable of an function to another function.

var ----> Declares a variable globally or locally to an entire function. It ignores "blocks" like if and for, which often causes bugs.
          Redeclaration, Reassignment are allowed. Can use the let variable of an function to another function if just declared anywhere.

const --> Like let, it is block-scoped, but the value cannot be changed once set. Use this by default for everything unless you know the value must change.
          The safe way.Redeclaration, Reassignment are not allowed.

*/