function gen_brackets(count, i, init) {
    while (i<count) {
        let place = Math.floor(Math.random() * 2);
        let typ = Math.floor(Math.random() * 4);
        if (place==0) {
            if (typ==0) {
                init='('+ init + ')'
            }
            if (typ==1) {
                init='['+ init + ']'
            }
            if (typ==2) {
                init='{'+ init + '}'
            }
            i+=1
        }
        if (place==1) {
            if (typ==0) {
                init = init + '()'
            }
            if (typ==1) {
                init = init + '[]'
            }
            if (typ==2) {
                init = init + '{}'
            }
            i+=1
        }
    }
   document.write(init)
}
let count = prompt();
gen_brackets(count, 0, '')



function correct_brackets(init) {
var init = prompt();
        while (init.includes('()') || init.includes('[]' || init.includes('{}'))) {
            init = init.replace('()', '')
            init = init.replace('[]', '')
            init = init.replace('{}', '')
        }
        return !init
}
document.write(correct_brackets('init'))