
// Interface for record data type (replace with your actual structure)
export interface Record {
    user_id: number; // INT PRIMARY KEY,
    username: string; // VARCHAR(50) UNIQUE,
    email: string; // VARCHAR(255) UNIQUE,
    password_hash: string; // VARCHAR(255),
    created_at: string; // DATETIME,
    updated_at: string; // DATETIME,
}
  