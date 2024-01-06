const logger=(store)=>(next)=>(action)=>{
    const currentState=store.getState();
    next(action)
}

export default logger;