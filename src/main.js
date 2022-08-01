// 队列，先进先出
const screen = document.getElementById("screen")
const gn = document.getElementById("getNumber")
const cn = document.getElementById("callNumber")
const cun = document.getElementById("currentNumber")
const queue = document.getElementById("queue")

let n = 0;
let arr = [];
gn.onclick = ()=>{
    n += 1;
    arr.push.call(arr,n);
    cun.innerHTML = n;
    queue.innerHTML = arr;
}
cn.onclick= ()=>{
    if(arr.length < 1){alert('叫个屁');return}
    let ask = arr.shift.call(arr);
    screen.innerHTML = `${ask}号请取餐`;
    queue.innerHTML = arr;
}

// 栈，比如调用栈，后进先出
function f1(){
    let a=1;
    return a + f2()
}
function f2(){
    let b=2;
    return b + f3()
}
function f3(){
    let c=3;
    return c;
}
f1();

//链表
//创建链表
let createList = function (value){
    return {
        data: value,
        next: null,
    }
}

//遍历链表
let travelList = (list,fn)=>{
    let x = list
    while(x !== null){
        fn(x)
        x = x.next
    }
}

//链表末尾新增节点
let appendList = (list,value)=>{
    let x = list;
    while(x.next){
        x = x.next;
    }
    let newNode = createList(value);
    x.next = newNode;
    return newNode;
}

//删除节点
let removeList = (list,node)=>{
    let x = list;
    while(x !== null){
        if(x.next === node){
            x.next = node.next
            return
        }
        x = x.next
    }
}


// let list = createList(10);
// appendList(list,20)
// appendList(list,30)
// let four = appendList(list,40)
// appendList(list,50)
// travelList(list,(list)=>{console.log(list)})
// console.log('第一次遍历')
// removeList(list,four)
// travelList(list,(list)=>{console.log(list)})
// console.log('第二次遍历')

//树
//创建新树
let createTree = (value)=>{
    return{
        data: value,
        children: null
    };
}
//添加节点到已有树
let addNodeToTree = (node,value)=>{
    const newNode = {
        data: value,
        children: null,
        parent: node
    }
    node.children = node.children || [];
    node.children.push.call(node.children,newNode)
    return newNode
}
//遍历树
let travelTree = (tree,fn)=>{
    if(tree){
        fn(tree)
        if(tree.children){
            for(let i=0;i<tree.children.length;i++){
                travelTree(tree.children[i],fn)
            }
        }
        }
        return undefined
}
//在树中删除节点
let removeNodeFromTree = (tree,node)=>{
    if(node === tree){alert('不能删除树')}
    let siblings = node.parent.children;
    let index = null;
    for(let i = 0;i<siblings.length;i++){
        if(siblings[i]===node){
            index = i;
        }
    }
    siblings.splice.call(siblings,index,1)
}
let tree = createTree(1);
let oneone = addNodeToTree(tree,11);
let onetwo = addNodeToTree(tree,12);
let onethree = addNodeToTree(tree,13);
let onefour = addNodeToTree(tree,14);
console.log(tree)
console.log(oneone)
travelTree(tree,(node)=>{console.log(node)})
console.log('````')
removeNodeFromTree(tree,oneone)
travelTree(tree,(node)=>{console.log(node)})