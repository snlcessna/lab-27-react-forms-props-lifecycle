401 JS --  Lab 27 Reddit Search Engine
===
###DESCRIPTION###
Created required components as described in ####Feature Tasks. The form takes in a string to search for in reddit and returns the number of submissions put into the Thread Limit cell of the form. The results are populated in an unordered list under the form elements with clickable links to the url and the number of topic.ups.
#################

#### Feature Tasks
Create the following components and structure them according to the following diagram.  
```
App
  SearchForm
  SearchResultList
```
###### App Component
* should contain all of the **application state**
* should contain methods for modifying the application state
* the state should have a topics array for holding the results of the search

###### SearchForm Component
* should contain a text input for the user to supply a reddit board to look up
* should contain a number input for the user to limit the number of results to return
  * the number must be less than 0 and greater than 100
* `onSubmit` the form should make a request to reddit
  * it should make a get request to `http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
  * on success it should pass the results to the application state
  * on failure it should add a class to the form called error and turn the form's inputs borders red

###### SearchResultList Component
* Should inerrit all search results through props
* This component does not need to have its own state!
* If there are topics in the application state it should display the unordered list
* Each list item in the unordered list should contain the following
  * an anchor tag with a href to the topic.url
    * inside the anchor a heading tag with the topic.title
    * inside the anchor a p tag with the number of topic.ups

#### Test
* no testing today

####  Documentation  
Write a description of the project in your README.md
