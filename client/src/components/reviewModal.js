function Review({courseName, id}){
    return(
        <div>
        <div class="modal fade" id={id}  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLabel">{courseName}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-dark">
              Rate this course!
              <br/>
              <label for="customRange3" class="form-label"></label>
            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary text-danger" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary text-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${id}`}>
        Launch demo modal
      </button>
      </div>
    )
    
}

export default Review