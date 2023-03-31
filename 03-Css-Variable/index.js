const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const hl = document.querySelector(".hl");

const img = document.querySelector("img");



spacing.addEventListener('input',()=>{
    const inputSpacing = spacing.value;
    img.style.setProperty('padding',inputSpacing + 'px');
    console.log(img.style.setProperty('padding',inputSpacing + 'px'))

})

blur.addEventListener('input',()=>{
    const inputBlur = blur.value;
    img.style.setProperty('filter','blur(' + inputBlur +'px)');
    console.log(img.style.setProperty('filter','blur(' + inputBlur +'px)'))
})

base.addEventListener('input',()=>{
    const inputBase = base.value
    img.style.setProperty('background-color',inputBase);
    console.log(img.style.setProperty('background-color',inputBase))
})

hl.addEventListener('input',()=>{

    img.style.setProperty('color',inputBase);
})