class Graph<T>{
	private matrix : boolean[][];
	private vertices : T[];

	constructor(){
		this.matrix = [];
		this.vertices = [];
	}

	addVertex(v : T){
		if(this.vertices.indexOf(v) !== -1){
			console.error("Vertex already exists")
			return
		}
		this.vertices.push(v)
		for(let i = 0; i < this.matrix.length; i++){
			this.matrix[i].push(false);	
		}
		let temp = Array(this.vertices.length);
		temp.fill(false);
		this.matrix.push(temp)
	}

	setEdge(src : T, dst : T){
		if(this.vertices.indexOf(src) >= 0 && this.vertices.indexOf(dst) >= 0){
			this.matrix[this.vertices.indexOf(src)][this.vertices.indexOf(dst)] = true;
		}
	}

	removeEdge(src : T, dst : T){
		if(this.vertices.indexOf(src) >= 0 && this.vertices.indexOf(dst) >= 0){
			this.matrix[this.vertices.indexOf(src)][this.vertices.indexOf(dst)] = false;
		}
	}

	hasEdge(src : T, dst : T) : boolean{
		if(this.vertices.indexOf(src) >= 0 && this.vertices.indexOf(dst) >= 0){
			return this.matrix[this.vertices.indexOf(src)][this.vertices.indexOf(dst)];
		}
		return false;
	}
}
