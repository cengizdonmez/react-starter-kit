import { useEffect } from 'react';
import { useState } from 'react';

function FormElementExp() {
  const genders = [
    { key: '1', value: 'Erkek' },
    { key: '2', value: 'Kadın' },
  ];
  const categoryList = [
    { key: 1, value: 'React' },
    { key: 2, value: 'JavaScript' },
    { key: 3, value: 'Css' },
    { key: 4, value: 'Html' },
  ];
  const levels = [
    { key: 'beginner', value: 'Başlangıç' },
    { key: 'intermediate', value: 'Orta' },
    { key: 'advanced', value: 'İleri' },
  ];
  const [name, setName] = useState('Cengiz');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: 'Kurallar 1', checked: false },
    { key: 2, value: 'Kurallar 2', checked: false },
    { key: 3, value: 'Kurallar 3', checked: true },
  ]);
  const [level, setLevel] = useState('intermediate');
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImage(fileReader.result);
      };
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const checkRule = (key, checked) => {
    setRules((prev) => {
      return prev.map((item) => {
        if (item.key === key) {
          return { ...item, checked };
        }
        return item;
      });
    });
  };

  const selectedGender = genders.find((g) => g.key === gender);
  const selectedLevel = levels.find((g) => g.key === level);
  const enabledChecked = rules.every((rule) => rule.checked);

  return (
    <>
      <div className="name py-5">
        <button className="bg-blue-700 p-1" onClick={() => setName('Enes')}>
          Change name
        </button>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {name}
      </div>
      <hr />
      <div className="description py-5">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        {description}
      </div>
      <hr />
      <div className="gender py-5">
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Seçin</option>
          {genders.map((gender) => (
            <option value={gender.key} key={gender.key}>
              {gender.value}
            </option>
          ))}
        </select>
        <br />
        <pre> {JSON.stringify(selectedGender, null, 2)} </pre>
      </div>

      <hr />
      <div className="categories py-5">
        <button
          className="bg-blue-700 p-1"
          onClick={() => setCategories([2, 3, 4])}
        >
          2-3-4 Kategorileri seç.
        </button>{' '}
        <br />
        <select
          value={categories}
          multiple={true}
          onChange={(e) =>
            setCategories(
              [...e.target.selectedOptions].map((option) => +option.value)
            )
          }
        >
          {categoryList.map((category) => (
            <option value={category.key} key={category.key}>
              {category.value}
            </option>
          ))}
        </select>
        <br />
        <pre> {JSON.stringify(categories, null, 2)} </pre>
      </div>

      <hr />
      <div className="rule py-5">
        <label>
          <input
            type="checkbox"
            checked={rule}
            onChange={(e) => setRule(e.target.checked)}
          />
          okudum kabul ediyorum
        </label>
        <br />
        <button
          className="bg-green-700 p-1 disabled:bg-gray-400"
          disabled={!rule}
        >
          Tamam, Devam et.
        </button>
      </div>

      <hr />
      <div className="rules py-5">
        {rules.map((rule) => (
          <label key={rule.key}>
            <input
              type="checkbox"
              checked={rule.checked}
              onChange={(e) => checkRule(rule.key, e.target.checked)}
            />
            {rule.value}
          </label>
        ))}

        <br />

        <pre> {JSON.stringify(rules, null, 2)} </pre>
        <br />
        <button
          className="bg-green-700 p-1 disabled:bg-gray-400"
          disabled={!enabledChecked}
        >
          Tamam, Devam et.
        </button>
      </div>

      <hr />
      <div className="levels py-5">
        {levels.map((l, index) => (
          <label key={index}>
            <input
              type="radio"
              value={l.key}
              checked={l.key === level}
              onChange={(e) => setLevel(e.target.value)}
            />
            {l.value}
          </label>
        ))}
        <br />
        {level}
        <br />
        <pre> {JSON.stringify(selectedLevel, null, 2)} </pre>
      </div>
      <hr />
      <div className="avatar py-5">
        <br />

        <label>
          <input
            className="text-white"
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </label>
        <br />

        {avatar && (
          <>
            {image && (
              <img
                src={image}
                alt={avatar.name}
                className="w-20 h-20 rounded-full"
              />
            )}
            <h4 className="bg-green-500 font-bold inline-block border-2 p-1">
              {avatar.name}
            </h4>
          </>
        )}
      </div>
    </>
  );
}

export default FormElementExp;
