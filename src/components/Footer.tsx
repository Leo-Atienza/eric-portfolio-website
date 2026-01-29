const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eric Lee. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for data & analytics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
