import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

class AddNewBook extends  React.Component{

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            title: '',
            bookAuthor: '',
            year: '',
            bookDescription: '',
            genre: '',
            bookCover: ''
        }
    }    

    submitForm = async e => {
        e.preventDefault();

        if (
            this.validator.allValid()  
        ) {
            console.log(this.state);
            await this.props.addBookHandler(this.state);
        } else {
            this.validator.showMessages();
        }


    }
    
    setInputValue =async e => {
        const newState = {};
        newState[e.target.name] = e.target.value;

        await this.setState(newState);
        
    }

    setBookCover = e => {
        let file = e.target.files[0];
        if (file) {
          if (e.target.files[0].type.split("/")[0] === "image") {
            this.setState({
              bookCover: file,
              bookCoverName: file ?
                file.name : "book_cover"
            });
          } else {
              console.log("Invalid File");
           // this.props.onSetModal({ isShow: true, modalTitle: "Invalid image type", modalText: "Choose valid image" });
          }
        } else {
            console.log("Choose File");
          //this.setState({ profilePicture: null, profilePictureName: "Choose file" });
        }
        console.log("chosen file with car is:  " + file.name);
      }

      render() {
        return (<div className="add-new-book">
            <Form onSubmit={this.submitForm}>

                <Form.Group controlId='formBookTitle'>
                    <Form.Label>Book title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book title'
                        name='title'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('title')}
                        isInvalid={
                            !this.validator.fieldValid('title')
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'title',
                            this.state.title,
                            'required|min:2|max:20|alpha_space'
                        )}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBookAuthor'>
                    <Form.Label>Book author</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book title'
                        name='bookAuthor'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('bookAuthor')}
                        isInvalid={
                            !this.validator.fieldValid('bookAuthor')
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'bookAuthor',
                            this.state.bookAuthor,
                            'required|min:2|max:20|alpha_space'
                        )}
                    </Form.Text>
                </Form.Group>
                
                

                <Form.Group controlId='formBookYear'>
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book release date'
                        name='year'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('year')}
                        isInvalid={
                            !this.validator.fieldValid('year')
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'year',
                            this.state.year,
                            "required|numeric|min:0,num"
                        )}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBookDescription'>
                    <Form.Label>Book description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book description'
                        name='bookDescription'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('bookDescription')}
                        isInvalid={
                            !this.validator.fieldValid('bookDescription')
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'bookDescription',
                            this.state.bookDescription,
                            'required|min:2|max:50|alpha_num_dash_space'
                        )}
                    </Form.Text>
                </Form.Group>



                <Form.Group controlId='formBookGenre'>
                    <Form.Label>Book genre</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book genre'
                        name='genre'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('genre')}
                        isInvalid={
                            !this.validator.fieldValid('genre')
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'genre',
                            this.state.genre,
                            'required|min:3|max:15|alpha'
                        )}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBookCover'>
                    <Form.Label>Book cover</Form.Label>
                    <Form.Control
                        type='file'
                        placeholder='upload book cover'
                        name='cover'
                        accept=".jpg, .jpeg, .png"
                        onChange={this.setBookCover}
                    />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mb-3'>
                        Add book
                    </Button>            




            </Form>
        </div>)    
    }

}


export default AddNewBook;