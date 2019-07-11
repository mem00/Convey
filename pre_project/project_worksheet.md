# Project Overview

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description Wireframes / Priority Matrix / Functional Components | Complete
|Day 2| Setup Up Backend With Auth  | Complete
|Day 3| Setup Front End Login and Create/Read| Complete
|Day 4| Setup Websocket/XMPP| Almost Compplete
|Day 5| Setup Front End Update/Delete | Incomplete
|Day 6| Styling/MVP | Incomplete
|Day 7| Post-MVP | Incomplete
|Day 8| Present | Incomplete


## Project Description

Mobile messaging app using React Native, Ruby on Rails, and Websockets/XMPP. Users will login or signup to access their account. The user will add contacts to their account. The user will be able to create chats with their contacts. The user will be able to delete the message thread. The user will be able to edit and delete messages they send. The user will be able to clear chat history. Chats and messages will persist.

## Wireframes
See Image 

## Priority Matrix
See Image
  
#### MVP 

- Login/Signup
- Two-way messaging
- CRUD
- Style

#### PostMVP 

- Encryption
- Like messages 
- Group Chat

## Architectural Design

See Image

## ERD

See Image

## UI Components

| Component | Description | 
| --- | :---: |  
| Chats | List All Chats | 
| Login | Login Form | 
| Signup | Signup Form | 
| Chat | Specific Chat | 
| Contacts | List all contacts| 
| Add Contact | Add contact Form| 


#### Timeframe

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Backend | H | 6hrs| 9hrs|
| Frontend | H | 12hrs| 4hrs |
| Auth | H | 6hrs| 2hrs |
| Add contact | H | 6hrs| NA |
| Websocket/XMPP | H | 6hrs| 6hr |
| Styling | H | 8hrs| NA |
| PostMVP | H | 8hrs| NA |
| Total | H | 52hrs| NA | 

## Helper Functions

| Function | Description | 
| --- | :---: |  
| Map | Display list on page | 

## Additional Libraries

| Library | What it Does | 
| --- | :---: |  
| ReactNative | Mobile App | 
| SendBird | Chat API | 
| Websocket/XMPP | Communication | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object