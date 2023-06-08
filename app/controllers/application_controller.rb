class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck and Enjoy the Movies!" }.to_json
  end

  # Fetch all users from the database
  get '/users' do
    user = User.all
    user.to_json
  end

  # Add a new user to the database
  post '/users' do
    user = User.create(params)
    user.to_json
  end



# Fetch all projects from the database
  get '/movie' do
    movie = Movie.all
    movie.to_json
  end

  # Add a new project to the database
  post '/movie' do
    movie = Movie.create(params)
    movie.to_json
  end

 # Fetch project by :id from the database
  get '/movie/:id' do
    movie = Movie.find(params[:id])
    movie.to_json
  end

   # Update project data from the database
   patch '/movie/:id' do
    movie = Movie.find(params[:id])
    movie.update(
      title: params[:title],
      description: params[:description],
      category: params[:category],
      image_url: params[:image_url],
      user_id: params[:user_id]
    )
    movie.to_json
  end
  

  # Delete a project by :id from the database
  delete '/movie/:id' do
    movie = Movie.find(params[:id])
    movie.destroy
    movie.to_json
  end

end