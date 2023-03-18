var userinput = []
cur_input = ""
var canusefloat = true
const button1 = document.querySelector('#one')
button1.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '1'
    }
    
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button2 = document.querySelector('#two')
button2.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '2'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button3 = document.querySelector('#three')
button3.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '3'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button4 = document.querySelector('#four')
button4.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '4'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button5 = document.querySelector('#five')
button5.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '5'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button6 = document.querySelector('#six')
button6.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '6'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button7 = document.querySelector('#seven')
button7.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '7'
    }
    console.log(cur_input)
    console.log(userinput)
    updatedisplay(cur_input)
})
const button8 = document.querySelector('#eight')
button8.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '8'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button9 = document.querySelector('#nine')
button9.addEventListener('click', () => {
    if(cur_input.length < 22){
        cur_input += '9'
    }
    console.log(cur_input)
    updatedisplay(cur_input)
})
const button0 = document.querySelector('#zero')
button0.addEventListener('click', () => {
    if(cur_input.length < 22){
        if(cur_input != '0'){
            cur_input += '0'
        }
    }
    
    console.log(cur_input)
    updatedisplay(cur_input)
})



// use these to parse user input
function parse_cur_input(str){
    if(str != ''){
        userinput.push(Number(str))
        console.log(userinput)
        clear_cur_input()
    }
}


function clear_cur_input(){
    cur_input = ""
    
}


//Operands: + - X / Clear
// the evaluate expression

function evaluate(userinput){
    canusefloat = true
    if(userinput.length == 2){
        console.log('called')
        if(!(isNaN(userinput[1]))){
            console.log('called2')
            userinput = [userinput[1]]
        }
        else{
            return userinput
        }
    }
    switch (userinput[1]) {
        case ('+'):
            console.log('case addition')
            console.log(userinput)
            userinput = [userinput[0] + userinput[2]]
            if(String(userinput).length > 22){
                updatedisplay('OVERFLOW')
                userinput = []
                clear_cur_input()
                return userinput
            }
            updatedisplay(userinput[0])
            clear_cur_input()
            
            return userinput
        case('-'):
            userinput = [userinput[0] - userinput[2]]
            updatedisplay(userinput[0])
            if(String(userinput).length > 22){
                updatedisplay('OVERFLOW')
                userinput = []
                clear_cur_input()
                return userinput
            }
            return userinput
        case('x'):
            userinput = [userinput[0] * userinput[2]]
            updatedisplay(userinput[0])
            return userinput

        case('/'):
            if(userinput[2] == 0){
                console.log('error,divide by 0')
                var display = document.querySelector('#cacl-display')
                display.textContent = 'Error'
                userinput = []
                
                return userinput
            }else{
                userinput = [userinput[0] / userinput[2]]
                updatedisplay(userinput[0])
                return userinput
            }
        default:
            return userinput

        
    }
}
// for the display
function updatedisplay(content){
    var display = document.querySelector('#cacl-display')
    display.textContent = content
}
const clear_btn = document.querySelector('#ac')
clear_btn.addEventListener('click', () => {
    userinput = []
    clear_cur_input()
    console.log('entries cleared')
    updatedisplay(0)
})
// the add button

const add_btn = document.querySelector('#add')
add_btn.addEventListener('click', () => {
    parse_cur_input(cur_input)
    updatedisplay('+')
    userinput = evaluate(userinput)
    if(userinput.length == 1 ){
        console.log('already something in mem')
        userinput.push('+')
        console.log(userinput)
    }
    else if(userinput.length == 2){
        userinput[1] = '+'
    }
    else if(userinput.length == 3){
        console.log('theres two things in mem')
        console.log(userinput)
        userinput = evaluate(userinput) //evaluates what's aleady there
        userinput.push('+')

    }
})
const sub_btn = document.querySelector('#sub')
sub_btn.addEventListener('click', () => {
    parse_cur_input(cur_input)
    updatedisplay('-')
    userinput = evaluate(userinput)
    if(userinput.length == 1 ){
        console.log('already something in mem')
        userinput.push('-')
        console.log(userinput)
    }
    else if(userinput.length == 2){
        userinput[1] = '-'
    }
    else if(userinput.length == 3){
        console.log('theres two things in mem')
        console.log(userinput)
        userinput = evaluate(userinput) //evaluates what's aleady there
        userinput.push('-')

    }
})
const mul_btn = document.querySelector('#mul')
mul_btn.addEventListener('click',() => {
    parse_cur_input(cur_input)
    updatedisplay('✕')
    userinput = evaluate(userinput)
    if(userinput.length == 1 ){
        console.log('already something in mem')
        userinput.push('x')
        console.log(userinput)
    }
    else if(userinput.length == 2){
        userinput[1] = 'x'
    }
    else if(userinput.length == 3){
        console.log('theres two things in mem')
        console.log(userinput)
        userinput = evaluate(userinput) //evaluates what's aleady there
        userinput.push('x')

    }
})

const div_btn = document.querySelector('#div')
div_btn.addEventListener('click', () =>{
    parse_cur_input(cur_input)
    updatedisplay('÷')
    
    userinput = evaluate(userinput)
    if(userinput.length == 1 ){
        console.log('already something in mem')
        userinput.push('/')
        console.log(userinput)
    }
    else if(userinput.length == 2){
        userinput[1] = '/'
    }
    else if(userinput.length == 3){
        console.log('theres two things in mem')
        console.log(userinput)
        userinput = evaluate(userinput) //evaluates what's aleady there
        userinput.push('/')

    }
})



const equals_btn = document.querySelector('#equals')
equals_btn.addEventListener('click', () => {
    parse_cur_input(cur_input)
    

    userinput = evaluate(userinput)
    console.log(userinput[0])
    console.log(userinput)
})

const unary_op = document.querySelector('#unary')
unary_op.addEventListener('click', () => {
if(cur_input != ''){
    cur_input = String(Number(cur_input * -1))
    updatedisplay(cur_input)
}
if(cur_input == ''){
    if(userinput[0]){
        userinput[0] = -1 * userinput[0]
        updatedisplay(userinput[0])
    }
}
})

const decimal = document.querySelector('#float')
decimal.addEventListener('click', () =>{
    if(canusefloat != false && cur_input != ''){
        cur_input += '.'
        updatedisplay(cur_input)
        canusefloat = false
    }   
})
const backspace = document.querySelector('#backspace')
backspace.addEventListener('click', () =>{
    if(cur_input != ''){
        cur_input = cur_input.slice(0,-1)
        updatedisplay(cur_input)
    }
})



