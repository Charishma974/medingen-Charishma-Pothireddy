from .database import db

# Medicine Model
class Medicine(db.Model):
    __tablename__ = 'medicines'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    generic_name = db.Column(db.String(100), nullable=False)
    formulation = db.Column(db.String(50))
    dosage = db.Column(db.String(50))
    manufacturer = db.Column(db.String(100))
    price = db.Column(db.Float, nullable=False)
    discount_percent = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text)
    about = db.Column(db.Text)
    uses = db.Column(db.Text)
    how_it_works = db.Column(db.Text)
    image_url = db.Column(db.String(255))

    # Relationships
    side_effects = db.relationship('SideEffect', backref='medicine', cascade='all, delete-orphan', lazy=True)
    faqs = db.relationship('FAQ', backref='medicine', cascade='all, delete-orphan', lazy=True)
    reviews = db.relationship('Review', backref='medicine', cascade='all, delete-orphan', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'generic_name': self.generic_name,
            'formulation': self.formulation,
            'dosage': self.dosage,
            'manufacturer': self.manufacturer,
            'price': self.price,
            'discount_percent': self.discount_percent,
            'description': self.description,
            'about': self.about,
            'uses': self.uses,
            'how_it_works': self.how_it_works,
            'image_url': self.image_url,
            'side_effects': [side_effect.to_dict() for side_effect in self.side_effects],
            'faqs': [faq.to_dict() for faq in self.faqs],
            'reviews': [review.to_dict() for review in self.reviews],
        }


# SideEffect Model
class SideEffect(db.Model):
    __tablename__ = 'side_effects'
    id = db.Column(db.Integer, primary_key=True)
    medicine_id = db.Column(db.Integer, db.ForeignKey('medicines.id'), nullable=False)
    effect = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'medicine_id': self.medicine_id,
            'effect': self.effect
        }


# FAQ Model
class FAQ(db.Model):
    __tablename__ = 'faqs'
    id = db.Column(db.Integer, primary_key=True)
    medicine_id = db.Column(db.Integer, db.ForeignKey('medicines.id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'medicine_id': self.medicine_id,
            'question': self.question,
            'answer': self.answer
        }


# Review Model
class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    medicine_id = db.Column(db.Integer, db.ForeignKey('medicines.id'), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    review_text = db.Column(db.String(255))

    def to_dict(self):
        return {
            'id': self.id,
            'medicine_id': self.medicine_id,
            'rating': self.rating,
            'review_text': self.review_text,
        }
