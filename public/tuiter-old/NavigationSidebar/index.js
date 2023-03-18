const NavigationSidebar = (active) => {
  return `
    <div class="list-group">
        <li class="list-group-item">
            <i class="fab fa-twitter"></i>
        </li>
        <a href="../home/index.html" class="list-group-item list-group-item-action ${
          active == "Home" ? "active" : ""
        }">
            <i class="fas fa-home"></i>
            <span class="navigation-label">Home</span>
        </a>
        <a
            href="../explore/index.html"
            class="list-group-item list-group-item-action ${
              active == "Explore" ? "active" : ""
            }"
        >
            <i class="fas fa-hashtag"></i>
            <span class="navigation-label">Explore</span></a
        >
        <a href="#" class="list-group-item list-group-item-action ${
          active == "Notifications" ? "active" : ""
        }">
            <i class="fas fa-bell"></i>
            <span class="navigation-label">Notifications</span></a
        >
        <a href="#" class="list-group-item list-group-item-action ${
          active == "Messages" ? "active" : ""
        }">
            <i class="fas fa-envelope"></i>
            <span class="navigation-label">Messages</span></a
        >
        <a href="#" class="list-group-item list-group-item-action ${
          active == "Bookmarks" ? "active" : ""
        }">
            <i class="fas fa-bookmark"></i>
            <span class="navigation-label">Bookmarks</span></a
        >
        <a href="#" class="list-group-item list-group-item-action ${
          active == "Lists" ? "active" : ""
        }">
            <i class="fas fa-list"></i>
            <span class="navigation-label">Lists</span></a
        >
        <a href="#" class="list-group-item list-group-item-action ${
          active == "Profile" ? "active" : ""
        }">
            <i class="fas fa-user"></i>
            <span class="navigation-label">Profile</span></a
        >
        <a href="#" class="list-group-item list-group-item-action ${
          active == "More" ? "active" : ""
        }">
            <i class="fas fa-grip-vertical"></i>
            <span class="navigation-label">More</span></a
        >
    </div>
    <div class="d-grid pt-2">
    <button class="btn btn-primary rounded-pill">Tweet</button>
    </div>
    `;
};
export default NavigationSidebar;
