const announcementText = "Strategic consulting and operational support for modern businesses — enquire with MMP Consultants today.";

const AnnouncementBar = () => {
  return (
    <div className="w-full gradient-banner py-3 px-4 overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center whitespace-nowrap text-body-sm font-medium text-primary-foreground animate-marquee">
        <span className="inline-block pr-12">{announcementText}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
