flowchart LR

    Client[Angular Frontend]

    Client --> REST[FastAPI REST API]
    Client --> WS[WebSocket Socket.IO]

    REST --> RoomService
    REST --> UserService

    WS --> RealtimeGateway

    RealtimeGateway --> GameEngine

    RoomService --> MongoDB[(MongoDB)]
    UserService --> MongoDB

    GameEngine --> MongoDB

flowchart TD

    A[User Opens FAFi]

    A --> B[Game Selection Page]

    B --> C[Codenames]
    B --> D[Monopoly]
    B --> E[Mafia]
    B --> F[Chess]

    C --> G[Create Room]
    C --> H[Join Room]

    G --> I[Generate Room Code]
    H --> I

    I --> J[/games/codenames/room/:code]

    J --> K[Room Lobby]

    K --> L[Player List]
    K --> M[Chat System]
    K --> N[Settings]
    K --> O[Start Game]

    N --> P[Change Username]
    N --> Q[Theme Settings]

    O --> R[Codenames Game Session]

    R --> S[Game Board]
    R --> T[Team Panel]
    R --> U[Turn Manager]
    R --> V[Realtime Chat]

    S --> W[Reveal Card]

    W --> X[Game Engine]

    X --> Y[Win Condition Check]

    Y --> Z[Results Screen]

    Z --> AA[Play Again]
    Z --> AB[Exit Room]

sequenceDiagram

    participant User1
    participant Angular
    participant Socket
    participant GameEngine
    participant MongoDB

    User1->>Angular: Click Create Room
    Angular->>Socket: create_room
    Socket->>MongoDB: Save Room
    MongoDB-->>Socket: Room Created
    Socket-->>Angular: Room Code

    User1->>Angular: Start Game
    Angular->>GameEngine: start_match
    GameEngine->>MongoDB: Generate Board
    GameEngine-->>Socket: Match Started

    Socket-->>Angular: Update All Players

    User1->>Angular: Select Card
    Angular->>Socket: reveal_card

    Socket->>GameEngine: Validate Move

    GameEngine-->>Socket: Updated State

    Socket-->>All Players: Realtime Update