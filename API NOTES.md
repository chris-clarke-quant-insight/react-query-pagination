API NOTES 

Users:
- GET /users: Retrieve a list of users (optionally with pagination or filtering).
- GET /users/:id: Get a specific user profile by ID.
- POST /users: Create a new user account.

Profiles:
- GET /profiles/:id: Get a specific user's profile information (including display name, bio, etc.).
- PUT /profiles/:id: Update a user's profile details.

Disciplines:
- GET /disciplines: Get a list of available creative disciplines.

User Disciplines: (Assuming a separate table)
- GET /users/:user_id/disciplines: Get a user's associated creative disciplines.
- PUT /users/:user_id/disciplines: Update a user's associated disciplines.

Portfolio (Optional, assuming a separate table)
- GET /profiles/:profile_id/portfolio: Get a user's portfolio items.
- POST /profiles/:profile_id/portfolio: Upload a new portfolio item.
- PUT /profiles/:profile_id/portfolio/:portfolio_item_id: Update a portfolio item.
- DELETE /profiles/:profile_id/portfolio/:portfolio_item_id: Delete a portfolio item.