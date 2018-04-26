class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            avatar: '',
            post_body: '',
            mood: '',
            song: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      console.log(this.state);
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.handleSubmit(this.state)
    }

    render(){
        return(
          <div className="container">
            <div className="col-lg-6 mx-auto postForm">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="Song" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" id="post_body" value={this.state.post_body} onChange={this.handleChange} placeholder="Your post"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Post to PostsList</button>
                </form>
            </div>
          </div>
        )
    }
}
