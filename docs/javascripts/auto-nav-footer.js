(() => {
  const map = {
    "how-to-use-this-site/": {
      next: { label: "Authors Map", href: "authors/" },
      related: [
        { label: "Study Plans", href: "plan/study-plans/" },
        { label: "Template Library", href: "template-library/" }
      ]
    },
    "authors/": {
      next: { label: "Book Guide", href: "../books/" },
      related: [
        { label: "Week Zero Kickoff", href: "../plan/week-zero-kickoff/" },
        { label: "Navigation Map", href: "../resources/navigation-map/" }
      ]
    },
    "books/": {
      next: { label: "Study Plans", href: "../plan/study-plans/" },
      related: [
        { label: "Core Book Reviews", href: "../reviews/core-book-reviews/" },
        { label: "Template Library", href: "../template-library/" }
      ]
    },
    "plan/study-plans/": {
      next: { label: "Progression Paths", href: "../progression-paths/" },
      related: [
        { label: "Weekly Checklist", href: "../../template-library/" },
        { label: "Reading Streak", href: "../../stats/reading-streak/" }
      ]
    },
    "plan/progression-paths/": {
      next: { label: "Learning Resources", href: "../../resources/learning-resources/" },
      related: [
        { label: "Media Watchlists", href: "../../resources/media-watchlists/" },
        { label: "Discussion Prompt Bank", href: "../../resources/discussion-prompt-bank/" }
      ]
    },
    "resources/learning-resources/": {
      next: { label: "Logic Drills", href: "../../cheatsheets/logic-drills/" },
      related: [
        { label: "Timeline Gallery", href: "../timeline-gallery/" },
        { label: "Access Alternatives", href: "../access-alternatives/" }
      ]
    },
    "resources/media-watchlists/": {
      next: { label: "Discussion Prompt Bank", href: "../discussion-prompt-bank/" },
      related: [
        { label: "Navigation Map", href: "../navigation-map/" },
        { label: "Core Book Reviews", href: "../../reviews/core-book-reviews/" }
      ]
    },
    "resources/discussion-prompt-bank/": {
      next: { label: "Core Book Reviews", href: "../../reviews/core-book-reviews/" },
      related: [
        { label: "Logic Drills", href: "../../cheatsheets/logic-drills/" },
        { label: "Exam Response Template", href: "../../template-library/" }
      ]
    },
    "cheatsheets/logic-drills/": {
      next: { label: "Argument Analysis", href: "../argument-analysis-cheat-sheet/" },
      related: [
        { label: "Discussion Prompt Bank", href: "../../resources/discussion-prompt-bank/" },
        { label: "Thinker Comparison", href: "../thinker-comparison-sheet/" }
      ]
    }
  };

  const path = window.location.pathname;
  const key = Object.keys(map).find((candidate) => path.endsWith(candidate));
  if (!key) return;

  const content = document.querySelector(".md-content__inner");
  if (!content || content.querySelector(".auto-nav-footer")) return;

  const { next, related } = map[key];

  const container = document.createElement("section");
  container.className = "auto-nav-footer";

  const title = document.createElement("h3");
  title.textContent = "Next step";
  container.appendChild(title);

  const nextLine = document.createElement("p");
  const nextLink = document.createElement("a");
  nextLink.href = next.href;
  nextLink.textContent = next.label;
  nextLine.appendChild(nextLink);
  container.appendChild(nextLine);

  const relatedTitle = document.createElement("h3");
  relatedTitle.textContent = "Related pages";
  container.appendChild(relatedTitle);

  const relatedList = document.createElement("ul");
  related.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    li.appendChild(link);
    relatedList.appendChild(li);
  });
  container.appendChild(relatedList);

  content.appendChild(container);
})();
