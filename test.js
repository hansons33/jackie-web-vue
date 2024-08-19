let a = { name: 1 }
Object.defineProperty(a, "name", {
    writable: false,
})
a.name = 5
