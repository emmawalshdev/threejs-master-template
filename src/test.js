// export default 'hello modules'

// export default () => {
//     console.log('function')
// }

// export default {
//     hello: 'modules'
// }

const oneThing = {
    hello: 'modules'
}

const secondThing = () => {
    console.log('test');
}

export { oneThing, secondThing }