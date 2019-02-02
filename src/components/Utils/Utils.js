export function getBrandName(path){
if(path === '/' || path === ' '){
    return 'Welcome'
}
else if(path === '/aboutme'){
    return 'Aboutme'
}
else{
    return (
        path
        .replace('/','')
        .charAt(0)
        .toUpperCase() + path.slice(2)
    )
}
}

export function getNevigationColor(path){
    const width=window.innerWidth;
    if(path === '/' && width>766){
        return 'transparent'
    }
    else{
        return 'black'
    }
}

export function getFooterColor(path){
if(path === ''){
    return 'white'
}else{
    return 'black'
}
}