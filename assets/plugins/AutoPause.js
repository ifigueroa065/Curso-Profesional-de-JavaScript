class AutoPause{
    constructor(){
        this.threshold=0.25;
        this.handleIntersection= this.handleIntersection.bind(this)
    }


    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {threshold: this.threshold});
        observer.observe(player.video);
    }

    handleIntersection(entries){
        const entry = entries[0];
        const isvisible = entry.intersectionRatio >= this.threshold;
        
        if (isvisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    
    }
    
}

export default AutoPause;