# Database Schema (MongoDB - Mongoose)

## Collection: profiles

### Fields
- **name**: String, required  
- **email**: String, required, unique  
- **age**: Number  
- **skills**: [String] (array of skills, searchable)  
- **education**: [String] (array of education qualifications)  
- **projects**: [Object]
  - title: String
  - description: String
  - links: [String]
- **links**: Object
  - github: String
  - linkedin: String
  - portfolio: String

### Indexes
- **email** → unique index (to avoid duplicate emails).
