function submit() {
    alert('Your phone number is ' + output.textContent);
}

function reset() {
    const resetValue = 0;
    output.textContent = ' ';
    outputInt = " ";
}

function numberZero () {
    console.log('You clicked number Zero!')
outputInt += '0';
    output.textContent = outputInt;
}

function numberOne () {
    console.log('You clicked number One!')
outputInt += '1';
    output.textContent = outputInt;
}

function numberTwo () {
    console.log('You clicked number Two!')
outputInt += '2';
    output.textContent = outputInt;
}

function numberThree () {
    console.log('You clicked number Three!')
outputInt += '3';
    output.textContent = outputInt;
}

function numberFour () {
    console.log('You clicked number Four!')
outputInt += '4';
    output.textContent = outputInt;
}

function numberFive () {
    console.log('You clicked number Five!')
outputInt += '5';
    output.textContent = outputInt;
}

function numberSix () {
    console.log('You clicked number Six!')
outputInt += '6';
    output.textContent = outputInt;
}

function numberSeven () {
    console.log('You clicked number Seven!')
outputInt += '7';
    output.textContent = outputInt;
}

function numberEight () {
    console.log('You clicked number Eight!')
outputInt += '8';
    output.textContent = outputInt;
}

function numberNine () {
    console.log('You clicked number Nine!')
outputInt += '9';
    output.textContent = outputInt;
}

function resetNull () {
    alert('Oh no! Number has been reset');
    const resetValue = 0;
    output.textContent = ' ';
    outputInt = " ";
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const zeroButton = document.querySelector('.zero-button').addEventListener('click', numberZero);
const oneButton = document.querySelector('.one-button').addEventListener('click', numberOne);
const twoButton = document.querySelector('.two-button').addEventListener('click', numberTwo);
const threeButton = document.querySelector('.three-button').addEventListener('click', numberThree);
const fourButton = document.querySelector('.four-button').addEventListener('click', numberFour);
const fiveButton = document.querySelector('.five-button').addEventListener('click', numberFive);
const sixButton = document.querySelector('.six-button').addEventListener('click', numberSix);
const sevenButton = document.querySelector('.seven-button').addEventListener('click', numberSeven);
const eightButton = document.querySelector('.eight-button').addEventListener('click', numberEight);
const nineButton = document.querySelector('.nine-button').addEventListener('click', numberNine);
const nullButton = document.querySelector('.null-button').addEventListener('mouseover', resetNull);
const firstPath = document.querySelector('.first-section').addEventListener('mouseover', resetNull);
const secondPath = document.querySelector('.second-section').addEventListener('mouseover', resetNull);
const aPath = document.querySelector('.a').addEventListener('mouseover', resetNull);
const bPath = document.querySelector('.b').addEventListener('mouseover', resetNull);
const cPath = document.querySelector('.c').addEventListener('mouseover', resetNull);
const dPath = document.querySelector('.d').addEventListener('mouseover', resetNull);
const ePath = document.querySelector('.e').addEventListener('mouseover', resetNull);
const fPath = document.querySelector('.f').addEventListener('mouseover', resetNull);
const gPath = document.querySelector('.g').addEventListener('mouseover', resetNull);
const hPath = document.querySelector('.h').addEventListener('mouseover', resetNull);
const iPath = document.querySelector('.i').addEventListener('mouseover', resetNull);
const jPath = document.querySelector('.j').addEventListener('mouseover', resetNull);
const kPath = document.querySelector('.k').addEventListener('mouseover', resetNull);
const lPath = document.querySelector('.l').addEventListener('mouseover', resetNull);
const mPath = document.querySelector('.m').addEventListener('mouseover', resetNull);
const nPath = document.querySelector('.n').addEventListener('mouseover', resetNull);
const oPath = document.querySelector('.o').addEventListener('mouseover', resetNull);
const pPath = document.querySelector('.p').addEventListener('mouseover', resetNull);
const qPath = document.querySelector('.q').addEventListener('mouseover', resetNull);
const rPath = document.querySelector('.r').addEventListener('mouseover', resetNull);
const sPath = document.querySelector('.s').addEventListener('mouseover', resetNull);
const tPath = document.querySelector('.t').addEventListener('mouseover', resetNull);
const uPath = document.querySelector('.u').addEventListener('mouseover', resetNull);
const vPath = document.querySelector('.v').addEventListener('mouseover', resetNull);
const wPath = document.querySelector('.w').addEventListener('mouseover', resetNull);
const xPath = document.querySelector('.x').addEventListener('mouseover', resetNull);
const yPath = document.querySelector('.y').addEventListener('mouseover', resetNull);
const zPath = document.querySelector('.z').addEventListener('mouseover', resetNull);
const abPath = document.querySelector('.ab').addEventListener('mouseover', resetNull);
const acPath = document.querySelector('.ac').addEventListener('mouseover', resetNull);
const adPath = document.querySelector('.ad').addEventListener('mouseover', resetNull);
const aePath = document.querySelector('.ae').addEventListener('mouseover', resetNull);
const afPath = document.querySelector('.af').addEventListener('mouseover', resetNull);
const agPath = document.querySelector('.ag').addEventListener('mouseover', resetNull);
const ahPath = document.querySelector('.ah').addEventListener('mouseover', resetNull);
const aiPath = document.querySelector('.ai').addEventListener('mouseover', resetNull);
const ajPath = document.querySelector('.aj').addEventListener('mouseover', resetNull);
const akPath = document.querySelector('.ak').addEventListener('mouseover', resetNull);
const alPath = document.querySelector('.al').addEventListener('mouseover', resetNull);
const amPath = document.querySelector('.am').addEventListener('mouseover', resetNull);
const anPath = document.querySelector('.an').addEventListener('mouseover', resetNull);
const aoPath = document.querySelector('.ao').addEventListener('mouseover', resetNull);
const apPath = document.querySelector('.ap').addEventListener('mouseover', resetNull);
const aqPath = document.querySelector('.aq').addEventListener('mouseover', resetNull);
const arPath = document.querySelector('.ar').addEventListener('mouseover', resetNull);
const asPath = document.querySelector('.as').addEventListener('mouseover', resetNull);
const atPath = document.querySelector('.at').addEventListener('mouseover', resetNull);
const auPath = document.querySelector('.au').addEventListener('mouseover', resetNull);
const avPath = document.querySelector('.av').addEventListener('mouseover', resetNull);
const awPath = document.querySelector('.aw').addEventListener('mouseover', resetNull);
const axPath = document.querySelector('.ax').addEventListener('mouseover', resetNull);
const ayPath = document.querySelector('.ay').addEventListener('mouseover', resetNull);
const azPath = document.querySelector('.az').addEventListener('mouseover', resetNull);
const baPath = document.querySelector('.ba').addEventListener('mouseover', resetNull);
const bbPath = document.querySelector('.bb').addEventListener('mouseover', resetNull);
const bcPath = document.querySelector('.bc').addEventListener('mouseover', resetNull);
const bdPath = document.querySelector('.bd').addEventListener('mouseover', resetNull);
const bePath = document.querySelector('.be').addEventListener('mouseover', resetNull);
const bfPath = document.querySelector('.bf').addEventListener('mouseover', resetNull);
const bgPath = document.querySelector('.bg').addEventListener('mouseover', resetNull);
const bhPath = document.querySelector('.bh').addEventListener('mouseover', resetNull);
const biPath = document.querySelector('.bi').addEventListener('mouseover', resetNull);
const bjPath = document.querySelector('.bj').addEventListener('mouseover', resetNull);
const bkPath = document.querySelector('.bk').addEventListener('mouseover', resetNull);
const blPath = document.querySelector('.bl').addEventListener('mouseover', resetNull);
const bmPath = document.querySelector('.bm').addEventListener('mouseover', resetNull);
const bnPath = document.querySelector('.bn').addEventListener('mouseover', resetNull);
const boPath = document.querySelector('.bo').addEventListener('mouseover', resetNull);
const bpPath = document.querySelector('.bp').addEventListener('mouseover', resetNull);
const bqPath = document.querySelector('.bq').addEventListener('mouseover', resetNull);
const brPath = document.querySelector('.br').addEventListener('mouseover', resetNull);
const bsPath = document.querySelector('.bs').addEventListener('mouseover', resetNull);
const btPath = document.querySelector('.bt').addEventListener('mouseover', resetNull);
const buPath = document.querySelector('.bu').addEventListener('mouseover', resetNull);
const bvPath = document.querySelector('.bv').addEventListener('mouseover', resetNull);
const bwPath = document.querySelector('.bw').addEventListener('mouseover', resetNull);
const bxPath = document.querySelector('.bx').addEventListener('mouseover', resetNull);
const byPath = document.querySelector('.by').addEventListener('mouseover', resetNull);
const bzPath = document.querySelector('.bz').addEventListener('mouseover', resetNull);
const caPath = document.querySelector('.ca').addEventListener('mouseover', resetNull);
const cbPath = document.querySelector('.cb').addEventListener('mouseover', resetNull);
const ccPath = document.querySelector('.cc').addEventListener('mouseover', resetNull);
const cdPath = document.querySelector('.cd').addEventListener('mouseover', resetNull);
const cePath = document.querySelector('.ce').addEventListener('mouseover', resetNull);
const cfPath = document.querySelector('.cf').addEventListener('mouseover', resetNull);
const cgPath = document.querySelector('.cg').addEventListener('mouseover', resetNull);
const chPath = document.querySelector('.ch').addEventListener('mouseover', resetNull);
const ciPath = document.querySelector('.ci').addEventListener('mouseover', resetNull);
const cjPath = document.querySelector('.cj').addEventListener('mouseover', resetNull);
const ckPath = document.querySelector('.ck').addEventListener('mouseover', resetNull);
const clPath = document.querySelector('.cl').addEventListener('mouseover', resetNull);
const cmPath = document.querySelector('.cm').addEventListener('mouseover', resetNull);
const cnPath = document.querySelector('.cn').addEventListener('mouseover', resetNull);
const coPath = document.querySelector('.co').addEventListener('mouseover', resetNull);
const cpPath = document.querySelector('.cp').addEventListener('mouseover', resetNull);
const cqPath = document.querySelector('.cq').addEventListener('mouseover', resetNull);
const crPath = document.querySelector('.cr').addEventListener('mouseover', resetNull);
const csPath = document.querySelector('.cs').addEventListener('mouseover', resetNull);
const ctPath = document.querySelector('.ct').addEventListener('mouseover', resetNull);
const cuPath = document.querySelector('.cu').addEventListener('mouseover', resetNull);
const cvPath = document.querySelector('.cv').addEventListener('mouseover', resetNull);
const cwPath = document.querySelector('.cw').addEventListener('mouseover', resetNull);
const cxPath = document.querySelector('.cx').addEventListener('mouseover', resetNull);
const cyPath = document.querySelector('.cy').addEventListener('mouseover', resetNull);
const czPath = document.querySelector('.cz').addEventListener('mouseover', resetNull);
const daPath = document.querySelector('.da').addEventListener('mouseover', resetNull);
const dcPath = document.querySelector('.dc').addEventListener('mouseover', resetNull);
const dbPath = document.querySelector('.db').addEventListener('mouseover', resetNull);
const dePath = document.querySelector('.de').addEventListener('mouseover', resetNull);
const dfPath = document.querySelector('.df').addEventListener('mouseover', resetNull);
const dgPath = document.querySelector('.dg').addEventListener('mouseover', resetNull);
const dhPath = document.querySelector('.dh').addEventListener('mouseover', resetNull);
const diPath = document.querySelector('.di').addEventListener('mouseover', resetNull);
const djPath = document.querySelector('.dj').addEventListener('mouseover', resetNull);