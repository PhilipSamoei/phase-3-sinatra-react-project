import React, { useState, useEffect } from 'react';
import '../Css/MovieForm.css';

const MovieForm = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch('http://localhost:9292/movie')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  };

  const createMovie = () => {
    const newMovie = {
      title,
      category,
      description,
      image_url,
    };

    fetch('http://localhost:9292/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies([...movies, data]);
        resetForm();
      })
      .catch((error) => console.error('Error creating movie:', error));
  };

  const updateMovie = (id) => {
    const updatedMovie = {
      title,
      category,
      description,
      image_url,
    };

    fetch(`http://localhost:9292/movie/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedMovies = movies.map((movie) => {
          if (movie.id === id) {
            return { id, ...updatedMovie };
          }
          return movie;
        });
        setMovies(updatedMovies);
        resetForm();
      })
      .catch((error) => console.error('Error updating movie:', error));
  };

  const deleteMovie = (id) => {
    fetch(`http://localhost:9292/movie/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const filteredMovies = movies.filter((movie) => movie.id !== id);
        setMovies(filteredMovies);
      })
      .catch((error) => console.error('Error deleting movie:', error));
  };

  const resetForm = () => {
    setTitle('');
    setCategory('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div className="movie-form-container">
      <h2>Create Movie</h2>
      <form className="movie-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image URL:</label>
          <input type="text" id="image_url" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="button" onClick={createMovie}>Create</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </div>
      </form>
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.category}</p>
            <p>{movie.description}</p>
            <img src={movie.image_url} alt={movie.title} />
            <button type="button" onClick={() => updateMovie(movie.id)}>Update</button>
            <button type="button" onClick={() => deleteMovie(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieForm;
