
import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  Heart,
  Laptop,
  Monitor,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
  Wifi,
  ShieldCheck,
  Headphones,
  RotateCcw,
  MessageCircle,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  badge?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Business Laptops",
    category: "Computing",
    description:
      "Reliable laptops for professionals, students, offices and everyday productivity.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Office and business applications",
      "Study and productivity",
      "Multiple specifications and budgets",
    ],
    badge: "POPULAR",
  },
  {
    id: 2,
    name: "Desktop Computers",
    category: "Computing",
    description:
      "Desktop solutions for business offices, schools, home workspaces and organizations.",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Office workstations",
      "Business applications",
      "Flexible configurations",
    ],
  },
  {
    id: 3,
    name: "Smartphones",
    category: "Mobile",
    description:
      "Smart devices for communication, business, photography and entertainment.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Different brands and models",
      "Multiple storage options",
      "Everyday connectivity",
    ],
    badge: "IN DEMAND",
  },
  {
    id: 4,
    name: "Computer Accessories",
    category: "Accessories",
    description:
      "Essential accessories to improve your workstation, connectivity and productivity.",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Keyboards and mice",
      "Adapters and cables",
      "Workspace essentials",
    ],
  },
  {
    id: 5,
    name: "Monitors & Displays",
    category: "Computing",
    description:
      "Display solutions for office work, studying, creative tasks and business setups.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Office displays",
      "Workspace upgrades",
      "Various screen sizes",
    ],
    badge: "WORKSPACE",
  },
  {
    id: 6,
    name: "Networking Equipment",
    category: "Networking",
    description:
      "Networking essentials to help connect devices and support your digital workspace.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Network accessories",
      "Connectivity solutions",
      "Business networking needs",
    ],
  },
];

const categories = [
  "All Products",
  "Computing",
  "Mobile",
  "Accessories",
  "Networking",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Product guidance",
    description: "Choose with confidence.",
  },
  {
    icon: ShoppingBag,
    title: "Product enquiries",
    description: "Ask about stock and prices.",
  },
  {
    icon: Headphones,
    title: "Personal assistance",
    description: "Get help with your needs.",
  },
  {
    icon: Wifi,
    title: "Digital solutions",
    description: "Technology for your business.",
  },
];

function getWhatsAppLink(productName: string) {
  const message =
    `Hello SALFA DIGITAL SOLUTIONS! I would like to enquire about ${productName}. ` +
    "Please share the available models, specifications and current price.";

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All Products");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  const [imageErrors, setImageErrors] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.features.some((feature) =>
          feature.toLowerCase().includes(query)
        );

      const matchesWishlist =
        !showWishlistOnly || wishlist.includes(product.id);

      return (
        matchesCategory &&
        matchesSearch &&
        matchesWishlist
      );
    });
  }, [search, activeCategory, wishlist, showWishlistOnly]);

  // Allow closing the product dialog with Escape.
  useEffect(() => {
    if (!selectedProduct) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  function toggleWishlist(productId: number) {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }

  function resetFilters() {
    setSearch("");
    setActiveCategory("All Products");
    setShowWishlistOnly(false);
  }

  function handleImageError(productId: number) {
    setImageErrors((current) =>
      current.includes(productId)
        ? current
        : [...current, productId]
    );
  }

  return (
    <section className="section products-section" id="products">
      <div
        className="products-glow products-glow-one"
        aria-hidden="true"
      />
      <div
        className="products-glow products-glow-two"
        aria-hidden="true"
      />

      <div className="products-container">
        {/* HERO / INTRODUCTION */}
        <div className="products-intro">
          <div className="products-heading-copy">
            <span className="eyebrow products-eyebrow">
              <Sparkles size={15} />
              THE SALFA TECHNOLOGY STORE
            </span>

            <h2>
              Smart Technology.
              <br />
              <span>Smarter Possibilities.</span>
            </h2>

            <p className="products-lead">
              Discover technology for your business, education and
              everyday life. Explore our product collection and
              contact our team for availability, specifications
              and current prices.
            </p>

            <div className="products-trust-row">
              <span>
                <Check size={15} />
                Product guidance
              </span>
              <span>
                <Check size={15} />
                Enquiry support
              </span>
              <span>
                <Check size={15} />
                Business solutions
              </span>
            </div>

            <div className="hero-actions">
              <a
                className="button-primary"
                href="#product-catalogue"
              >
                Explore products
                <ArrowRight size={17} />
              </a>

              <a
                className="button-secondary"
                href={getWhatsAppLink("technology products")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                Talk to our team
              </a>
            </div>
          </div>

          <div className="products-heading-visual">
            <div className="products-visual-ring" />

            <div className="products-visual-icon">
              <Laptop size={78} strokeWidth={1.15} />
            </div>

            <div className="products-floating-chip chip-top">
              <Sparkles size={15} />
              <span>Technology for you</span>
            </div>

            <div className="products-floating-chip chip-bottom">
              <ShoppingBag size={16} />
              <span>Explore our collection</span>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="products-benefits">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                className="products-benefit"
                key={benefit.title}
              >
                <div className="benefit-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <strong>{benefit.title}</strong>
                  <span>{benefit.description}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CATALOGUE */}
        <div
          className="products-catalogue"
          id="product-catalogue"
        >
          <div className="catalogue-heading">
            <div>
              <span className="eyebrow">
                BROWSE OUR COLLECTION
              </span>

              <h3>Find your next upgrade.</h3>

              <p>
                Search our products, browse categories and save
                items you want to enquire about.
              </p>
            </div>

            <button
              type="button"
              className={`wishlist-filter ${
                showWishlistOnly
                  ? "wishlist-filter-active"
                  : ""
              }`}
              onClick={() =>
                setShowWishlistOnly((current) => !current)
              }
              aria-pressed={showWishlistOnly}
            >
              <Heart
                size={17}
                fill={
                  showWishlistOnly ? "currentColor" : "none"
                }
              />
              Saved items
              <span>{wishlist.length}</span>
            </button>
          </div>

          {/* SEARCH */}
          <div className="products-toolbar">
            <label className="product-search">
              <Search size={19} aria-hidden="true" />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search laptops, smartphones, accessories..."
                aria-label="Search products"
              />

              {search && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </label>

            <span
              className="product-result-count"
              aria-live="polite"
            >
              Showing {filteredProducts.length} of{" "}
              {products.length} products
            </span>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="products-filter-row"
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`product-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product, index) => {
                const isSaved = wishlist.includes(product.id);

                const cardStyle = {
                  animationDelay: `${index * 80}ms`,
                } as CSSProperties;

                return (
                  <article
                    className="product-card"
                    key={product.id}
                    style={cardStyle}
                  >
                    <div className="product-art">
                      {!imageErrors.includes(product.id) ? (
                        <img
                          className="product-image"
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          onError={() =>
                            handleImageError(product.id)
                          }
                        />
                      ) : (
                        <div
                          className="product-image-fallback"
                          role="img"
                          aria-label={`${product.name} image unavailable`}
                        >
                          <Laptop size={48} />
                          <span>{product.name}</span>
                        </div>
                      )}

                      <div className="product-image-shade" />

                      {product.badge && (
                        <span className="product-label">
                          {product.badge}
                        </span>
                      )}

                      <button
                        type="button"
                        className={`product-wishlist ${
                          isSaved ? "is-saved" : ""
                        }`}
                        onClick={() =>
                          toggleWishlist(product.id)
                        }
                        aria-label={
                          isSaved
                            ? `Remove ${product.name} from saved items`
                            : `Save ${product.name}`
                        }
                        aria-pressed={isSaved}
                      >
                        <Heart
                          size={19}
                          fill={
                            isSaved ? "currentColor" : "none"
                          }
                        />
                      </button>

                      <button
                        type="button"
                        className="product-quick-view"
                        onClick={() =>
                          setSelectedProduct(product)
                        }
                        aria-label={`View details for ${product.name}`}
                      >
                        <Eye size={16} />
                        Quick view
                      </button>
                    </div>

                    <div className="product-info">
                      <div className="product-category">
                        {product.category}
                      </div>

                      <h4>{product.name}</h4>

                      <p>{product.description}</p>

                      <div className="product-bottom">
                        <div className="product-price-copy">
                          <span>Pricing</span>
                          <strong>Request a quote</strong>
                        </div>

                        <a
                          className="product-order"
                          href={getWhatsAppLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Enquire about ${product.name} on WhatsApp`}
                        >
                          <ShoppingBag size={16} />
                          Enquire
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="products-empty">
              <div className="products-empty-icon">
                <Search size={30} />
              </div>

              <h4>No products found</h4>

              <p>
                Try another search term, choose a different
                category or view your full collection.
              </p>

              <button
                type="button"
                className="products-reset"
                onClick={resetFilters}
              >
                <RotateCcw size={16} />
                Show all products
              </button>
            </div>
          )}
        </div>

        {/* CALL TO ACTION */}
        <div className="products-cta">
          <div className="products-cta-icon">
            <ShoppingBag size={26} />
          </div>

          <div className="products-cta-copy">
            <span>NEED HELP CHOOSING?</span>

            <h3>
              Let's find the right technology for you.
            </h3>

            <p>
              Tell us what you need and your budget. Contact
              SALFA to enquire about suitable products,
              specifications and current prices.
            </p>
          </div>

          <a
            href={getWhatsAppLink("your technology requirements")}
            target="_blank"
            rel="noopener noreferrer"
            className="products-cta-button"
          >
            Talk to our team
            <ArrowUpRight size={18} />
          </a>
        </div>

        <p className="products-note">
          Product images are illustrative. Availability,
          specifications, warranty terms and final prices must
          be confirmed with SALFA DIGITAL SOLUTIONS before
          purchase.
        </p>
      </div>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="product-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              autoFocus
            >
              <X size={21} />
            </button>

            <div className="product-modal-image-wrap">
              {!imageErrors.includes(selectedProduct.id) ? (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="product-modal-image"
                />
              ) : (
                <div className="product-image-fallback">
                  <Laptop size={48} />
                  <span>{selectedProduct.name}</span>
                </div>
              )}
            </div>

            <div className="product-modal-content">
              <span className="eyebrow">
                {selectedProduct.category}
              </span>

              <h3 id="product-modal-title">
                {selectedProduct.name}
              </h3>

              <p>{selectedProduct.description}</p>

              <h4>What to enquire about</h4>

              <ul className="product-feature-list">
                {selectedProduct.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink(selectedProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="product-modal-enquire"
              >
                <ShoppingBag size={18} />
                Enquire on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <button
                type="button"
                className="product-modal-save"
                onClick={() =>
                  toggleWishlist(selectedProduct.id)
                }
              >
                <Heart
                  size={17}
                  fill={
                    wishlist.includes(selectedProduct.id)
                      ? "currentColor"
                      : "none"
                  }
                />

                {wishlist.includes(selectedProduct.id)
                  ? "Remove from saved items"
                  : "Save this product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
