import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/imgs/logo.svg";
import Link from "../../assets/imgs/links.svg";
import { StarIcon } from "../../assets/imgs/star";
import "./PhotoGallery.css";

type Photo = {
  id: number;
  alt: string;
  avg_color: string;
  photographer: string;
  photographer_url: string;
  src: {
    small: string;
  };
};

const API_URL = "https://api.pexels.com/v1/search?query=nature&per_page=10";
const API_KEY = "Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0";

const getLikedPhotos = (): number[] => {
  const stored = localStorage.getItem("liked_photos");
  return stored ? JSON.parse(stored) : [];
};

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [liked, setLiked] = useState<number[]>(getLikedPhotos());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((res) => setPhotos(res.data.photos))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const toggleLike = (id: number) => {
    const updated = liked.includes(id)
      ? liked.filter((pid) => pid !== id)
      : [...liked, id];
    setLiked(updated);
    localStorage.setItem("liked_photos", JSON.stringify(updated));
  };

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading images...</div>;
  }

  return (
    <div className="gallery-container">
      <img src={Logo} style={{ width: 84, height: 84 }} />
      <h2 style={{ paddingBottom: 16 }}>All photos</h2>
      <div className="photo-list">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <StarIcon
              liked={liked.includes(photo.id)}
              onClick={() => toggleLike(photo.id)}
            />
            <img
              src={photo.src.small}
              alt={photo.alt}
              style={{ minWidth: 75, minHeight: 75 }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="photo-info">
                <strong style={{ fontSize: 16 }}>{photo.photographer}</strong>
                <div style={{ fontSize: 16 }}>{photo.alt}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16, color: photo.avg_color }}>
                    {photo.avg_color}
                  </span>
                  <div
                    style={{
                      backgroundColor: photo.avg_color,
                      width: 12,
                      height: 12,
                      borderRadius: 2,
                      border: "1px solid #ccc",
                    }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontSize: 12,
                }}
              >
                <a
                  href={photo.photographer_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Link} style={{ width: 12, height: 12 }} /> Portfolio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
